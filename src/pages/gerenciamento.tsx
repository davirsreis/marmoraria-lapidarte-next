import { Header } from "@/components/Header"
import { Botao } from "@/components/Botao"
import Formulario from "@/components/gerenciamento/Formulario"
import Layout from "@/components/gerenciamento/Layout"
import Tabela from "@/components/gerenciamento/Tabela"
import useProdutos from "@/hooks/useProdutos"

export default function Gerenciamento() {
  const { produto, produtos, selecionarProduto, excluirProduto, novoProduto, salvarProduto, tabelaVisivel, exibirTabela } = useProdutos()

  return (
    <>
      <Header />
      <section className="w-full flex flex-col items-center py-[30px]">
        {tabelaVisivel ? (
          <>
            <span className="text-[32px] font-semibold mb-[30px]">Produtos registrados</span>
            <div className="flex gap-4">
              <Botao
                cor="custom"
                onClick={novoProduto}
                customClass="w-[150px] bg-fifth-neutral hover:border-white p-2 border border-opacity-gray text-black font-bold"
              >
                Registrar item
              </Botao>
            </div>
            <Layout className="mt-4 min-w-[500px]">
              <Tabela produtos={produtos} produtoSelecionado={selecionarProduto} produtoExcluido={excluirProduto} />
            </Layout>
          </>
        ) :
          <>
            <Formulario
              produto={produto}
              produtoMudou={salvarProduto}
              cancelado={() => exibirTabela()}
            />
          </>
        }
      </section>
    </>
  )
}