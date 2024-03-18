import firebase, { storage } from "../config";
import Produto from "../../core/Produto";
import ProdutoRepositorio from "../../core/ProdutoRepositorio";

export default class ColecaoProduto implements ProdutoRepositorio {

  #conversor = {
    toFirestore(produto: Produto) {
      return {
        nome: produto.nome,
        pedra: produto.pedra,
        linkImg: produto.linkImg
      }
    },
    fromFirestore(snapshot: firebase.firestore.QueryDocumentSnapshot, options: firebase.firestore.SnapshotOptions): Produto {
      const dados = snapshot.data(options)
      return new Produto(dados.nome, dados.pedra, dados.linkImg, snapshot.id)
    }
  }

  async salvar(produto: Produto): Promise<Produto> {
    if (!produto) {
      throw new Error("Produto inválido");
    }

    if (produto.id) {
      await this.colecao().doc(produto.id).set(produto);
      return produto;
    } else {
      const docRef = await this.colecao().add(produto);
      const doc = await docRef.get();
      const novoProduto = doc.data();
      if (!novoProduto) {
        throw new Error("Erro ao salvar o produto");
      }
      return novoProduto;
    }
  }

  async excluir(produto: Produto): Promise<void> {
    return this.colecao().doc(produto.id).delete()
  }

  async obterTodos(): Promise<Produto[]> {
    const query = await this.colecao().get();
    console.log(query);
    console.log('Obtendo produtos');
    return query.docs.map(doc => doc.data()) ?? [];
}


  private colecao() {
    return firebase.
      firestore()
      .collection('produtos')
      .withConverter(this.#conversor)
  }

  async enviarArquivoJSON() {
    try {
      console.log('teste enviarArquivoJSON');
      const produtos = await this.obterTodos();
      const dadosFormatados = produtos.map(produto => ({
        id: produto.id,
        nome: produto.nome,
        pedra: produto.pedra,
        linkImg: produto.linkImg
      }));

      const jsonString = JSON.stringify(dadosFormatados);
      const blob = new Blob([jsonString], { type: 'application/json' });
      const storageRef = storage.ref().child('files/produtos.json');
      const snapshot = await storageRef.put(blob);

      const downloadURL = await snapshot.ref.getDownloadURL();

      await this.salvarUrl(downloadURL);

      console.log('Arquivo JSON enviado com sucesso. Link de download:', downloadURL);

      return downloadURL;
    } catch (error) {
      console.error('Erro ao enviar arquivo JSON:', error);
      throw error;
    }
  }

  #conversorUrl = {
    toFirestore(url: string) {
      return {
        url: url,
      }
    },
    fromFirestore(snapshot: firebase.firestore.QueryDocumentSnapshot, options: firebase.firestore.SnapshotOptions): string {
      const dado = snapshot.data(options)
      return dado.url;
    }
  }

  async salvarUrl(url: string): Promise<void> {
    try {
      if (!url) {
        throw new Error("URL inválida");
      }

      const colecao = this.colecaoUrl();
      const querySnapshot = await colecao.limit(1).get();
      const documentoExistente = querySnapshot.docs[0];

      if (documentoExistente) {
        await documentoExistente.ref.update({ url: url });
      } else {
        await colecao.add(url);
      }

      console.log('URL salva com sucesso.');
    } catch (error) {
      console.error('Erro ao salvar a URL:', error);
      throw error;
    }
  }

  private colecaoUrl() {
    return firebase.
      firestore()
      .collection('urls')
      .withConverter(this.#conversorUrl)
  }

  async obterUrl(): Promise<string | null> {
    try {
      const querySnapshot = await this.colecaoUrl().get();
  
      if (querySnapshot.empty) {
        console.log("Nenhuma URL encontrada na coleção.");
        return null;
      }
      const primeiroDocumento = querySnapshot.docs[0];
      const url = primeiroDocumento.data();
  
      if (!url) {
        console.log("URL não encontrada nos dados do documento.");
        return null;
      }
  
      return url;
    } catch (error) {
      console.error('Erro ao obter a URL:', error);
      throw error; 
    }
  }
  
  
}