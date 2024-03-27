import { useEffect, useState } from "react"
import ProdutoRepositorio from "../core/ProdutoRepositorio"
import Produto from "../core/Produto"
import ColecaoProduto from "../firebase/db/ColecaoProduto"
import useTabelaOuForm from "./useTabelaOuForm"

export default function useProdutos() {
  const repo: ProdutoRepositorio = new ColecaoProduto();

  const { tabelaVisivel, exibirTabela, exibirFormulario } = useTabelaOuForm();
  const [produto, setProduto] = useState<Produto>(Produto.vazio());
  const [produtos, setProdutos] = useState<Produto[]>([]);

  useEffect(() => {
    if (tabelaVisivel) {
      obterTodos();
    }
  }, [tabelaVisivel]);

  function obterTodos() {
    try {
      repo.obterTodos().then(produtos => {
        setProdutos(produtos)
        exibirTabela()
      })
    } catch (error) {
      alert('Ocorreu um erro durante o processo!')
      console.log(error);
    }
  }

  function selecionarProduto(produto: Produto) {
    try {
      setProduto(produto)
      exibirFormulario()
    } catch (error) {
      alert('Ocorreu um erro durante o processo!')
      console.log(error);
    }
  }

  async function excluirProduto(produto: Produto) {
    try {
      await repo.excluir(produto)
      obterTodos()
    } catch (error) {
      alert('Ocorreu um erro durante o processo!')
      console.log(error);
    }
  }

  function novoProduto() {
    try {
      setProduto(Produto.vazio())
      exibirFormulario()
    } catch (error) {
      alert('Ocorreu um erro durante o processo!')
      console.log(error);
    }

  }

  async function salvarProduto(produto: Produto) {
    try {
      await repo.salvar(produto)
      obterTodos()
    } catch (error) {
      alert('Ocorreu um erro durante o processo!')
      console.log(error);
    }
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