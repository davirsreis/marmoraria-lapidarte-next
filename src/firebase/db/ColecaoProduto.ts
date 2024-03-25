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
      };
    },
    fromFirestore(
      snapshot: firebase.firestore.QueryDocumentSnapshot<firebase.firestore.DocumentData>,
      options: firebase.firestore.SnapshotOptions
    ): Produto {
      const dados = snapshot.data(options);
      const produto = new Produto(dados.nome, dados.pedra, dados.linkImg, snapshot.id);
      return produto;
    }
  };

  private readonly cacheKey = "cacheProdutos";
  private cacheProdutos: Produto[] = [];

  async salvar(produto: Produto): Promise<Produto> {
    if (!produto) {
      throw new Error("Produto inválido");
    }


    if (produto.id) {
      await this.colecao().doc(produto.id).set(produto);
      let cachedProdutos: Produto[] = JSON.parse(localStorage.getItem(this.cacheKey) || '[]');
      cachedProdutos = cachedProdutos.filter(p => p.id !== produto.id);
      const produtoAtualizado = new Produto(produto.nome, produto.pedra, produto.linkImg, produto.id);
      const novoArray: Produto[] = [...cachedProdutos, produtoAtualizado]
      this.atualizarCache(novoArray, 'atualizar');
    }
     else {
      const docRef = await this.colecao().add(produto);
      const doc = await docRef.get();
      const novoProdutoData = doc.data();
      if (!novoProdutoData) {
        throw new Error("Erro ao salvar o produto");
      }
      const novoProduto = new Produto(
        novoProdutoData.nome,
        novoProdutoData.pedra,
        novoProdutoData.linkImg,
        docRef.id
      );
      this.atualizarCache([novoProduto], 'salvar');
    }
    return produto;
  }

  async excluir(produto: Produto): Promise<void> {
    try {
      await this.colecao().doc(produto.id).delete();
      let cachedProdutos: Produto[] = JSON.parse(localStorage.getItem(this.cacheKey) || '[]');
      const updatedCache = cachedProdutos.filter((p: Produto) => p.id !== produto.id);
      this.atualizarCache(updatedCache, 'deletar');

    } catch (error) {
      console.error('Erro ao excluir o produto:', error);
      throw error;
    }
  }

  async obterTodos(): Promise<Produto[]> {
    try {
      const cachedProdutos = localStorage.getItem(this.cacheKey);
      if (cachedProdutos) {
        this.cacheProdutos = JSON.parse(cachedProdutos);
        console.log("Obtendo produtos pelo cache");
        return this.cacheProdutos;
      } else {
        const querySnapshot = await this.colecao().withConverter(this.#conversor).get();
        console.log('Obtendo produtos pelo firebase');
        const produtos = querySnapshot.docs.map(doc => doc.data());
        this.atualizarCache(produtos, 'primeiraVez');

        return produtos;
      }
    } catch (error) {
      console.error('Erro ao obter todos os produtos:', error);
      throw error;
    }
  }


  private atualizarCache(produtos: Produto[], acao: string) {
    const cachedProdutos = localStorage.getItem(this.cacheKey);

    if (cachedProdutos && acao === 'primeiraVez') {
      this.cacheProdutos = JSON.parse(cachedProdutos);
      localStorage.setItem(this.cacheKey, JSON.stringify(this.cacheProdutos));
      return this.cacheProdutos;
    }

    if (cachedProdutos && acao === 'salvar') {
      this.cacheProdutos = JSON.parse(cachedProdutos);

      produtos.forEach(produto => {
        const novoItem: Produto = {
          nome: produto.nome,
          pedra: produto.pedra,
          linkImg: produto.linkImg,
          id: produto.id
        } as Produto;
        this.cacheProdutos.push(novoItem);
      })

      localStorage.setItem(this.cacheKey, JSON.stringify(this.cacheProdutos));
      return this.cacheProdutos;
    }

    if (cachedProdutos && acao === 'atualizar') {
      localStorage.setItem(this.cacheKey, JSON.stringify(produtos));
    }
    if (cachedProdutos && acao === 'deletar') {
      localStorage.setItem(this.cacheKey, JSON.stringify(this.cacheProdutos));
    }

    const produtosSerializados = produtos.map(produto => ({
      nome: produto.nome,
      pedra: produto.pedra,
      linkImg: produto.linkImg,
      id: produto.id
    }));

    localStorage.setItem(this.cacheKey, JSON.stringify(produtosSerializados));
  }

  private colecao() {
    return firebase.
      firestore()
      .collection('produtos')
      .withConverter(this.#conversor)
  }

  async enviarArquivoJSON() {
    try {
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

      console.log('Arquivo JSON enviado com sucesso!');

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