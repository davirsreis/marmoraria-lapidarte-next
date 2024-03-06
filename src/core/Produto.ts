export default class Produto {
  #id: string
  #nome: string
  #linkImg: string

  constructor(nome: string, linkImg: string, id: string = '') {
    this.#nome = nome
    this.#linkImg = linkImg
    this.#id = id
  }

  static vazio() {
    return new Produto('', '')
  }

  get id() {
    return this.#id
  }
  get nome() {
    return this.#nome
  }
  get linkImg() {
    return this.#linkImg
  }
}