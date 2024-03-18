import { useEffect, useState } from "react"
import ProdutoRepositorio from "../core/ProdutoRepositorio"
import Produto from "../core/Produto"
import ColecaoProduto from "../firebase/db/ColecaoProduto"
import useTabelaOuForm from "./useTabelaOuForm"

export default function useProdutos() {
  const repo: ProdutoRepositorio = new ColecaoProduto()

  const { tabelaVisivel, exibirTabela, exibirFormulario } = useTabelaOuForm()

  const [produto, setProduto] = useState<Produto>(Produto.vazio())
  const [produtos, setProdutos] = useState<Produto[]>([])


  useEffect(() => {
    if (tabelaVisivel) {
      obterTodos();
    }
  }, [tabelaVisivel]); // Ainda testando
  
  //useEffect(obterTodos, []) //Assim fica sem loop

  function obterTodos() {
    repo.obterTodos().then(produtos => {
      setProdutos(produtos)
      exibirTabela()
    })
  }

  function selecionarProduto(produto: Produto) {
    setProduto(produto)
    exibirFormulario()
  }

  async function excluirProduto(produto: Produto) {
    await repo.excluir(produto)
    obterTodos()
  }

  function novoProduto() {
    setProduto(Produto.vazio())
    exibirFormulario()
  }

  async function salvarProduto(produto: Produto) {
    await repo.salvar(produto)
    obterTodos()
  }

  return {
    produto,
    produtos,
    novoProduto,
    salvarProduto,
    excluirProduto,
    selecionarProduto,
    obterTodos,
    tabelaVisivel,
    exibirTabela
  }

}