import firebase from "../config";
import Produto from "../../core/Produto";
import ProdutoRepositorio from "../../core/ProdutoRepositorio";

export default class ColecaoProduto implements ProdutoRepositorio {

  #conversor = {
    toFirestore(produto: Produto) {
      return {
        nome: produto.nome,
        linkImg: produto.linkImg
      }
    },
    fromFirestore(snapshot: firebase.firestore.QueryDocumentSnapshot, options: firebase.firestore.SnapshotOptions): Produto {
      const dados = snapshot.data(options)
      return new Produto(dados.nome, dados.linkImg, snapshot.id)
    }
  }

  async salvar(produto: Produto): Promise<Produto> {
    if (produto?.id) {
      await this.colecao().doc(produto.id).set(produto)
      return produto
    } else {
      const docRef = await this.colecao().add(produto)
      const doc = await docRef.get()
      return doc.data()
    }
  }
  async excluir(produto: Produto): Promise<void> {
    return this.colecao().doc(produto.id).delete()
  }

  async obterTodos(): Promise<Produto[]> {
    const query = await this.colecao().get()
    return query.docs.map(doc => doc.data()) ?? []
  }

  private colecao() {
    return firebase.
      firestore()
      .collection('produtos')
      .withConverter(this.#conversor)
  }

}