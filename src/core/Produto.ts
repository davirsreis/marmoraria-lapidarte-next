export default class Produto {
  #id: string
  #nome: string
  #pedra: string[]
  #linkImg: string

  constructor(nome: string, pedra: string[], linkImg: string, id: string = '') {
    this.#nome = nome
    this.#pedra = pedra
    this.#linkImg = linkImg
    this.#id = id
  }

  static vazio() {
    return new Produto('', [], '')
  }

  get id() {
    return this.#id
  }
  get nome() {
    return this.#nome
  }
  get pedra() {
    return this.#pedra
  }
  get linkImg() {
    return this.#linkImg
  }
}