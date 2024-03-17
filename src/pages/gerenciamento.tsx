import { Botao } from "@/components/Botao"
import Formulario from "@/components/gerenciamento/Formulario"
import Layout from "@/components/gerenciamento/Layout"
import Tabela from "@/components/gerenciamento/Tabela"
import useProdutos from "@/hooks/useProdutos"
import { ordenarProdutos } from "@/functions/Auxiliares"
import ColecaoProduto from "@/firebase/db/ColecaoProduto"
import { Header } from "@/components/Header"
import { logout } from "@/firebase/autentication"
import { useState } from "react"

export default function Gerenciamento() {
  const { produto, produtos, selecionarProduto, excluirProduto, novoProduto, salvarProduto, tabelaVisivel, exibirTabela } = useProdutos()
  const [exibindoPopup, setExibindoPopup] = useState(false);
  const [atualizacao, setAtualizacao] = useState(true);
  const colecaoProduto = new ColecaoProduto();

  const enviarArquivoJSON = async () => {
    setExibindoPopup(true);
    await colecaoProduto.enviarArquivoJSON();
    setTimeout(() => {
      setAtualizacao(false);
    }, 3000);
    setTimeout(() => {
      setExibindoPopup(false);
      setAtualizacao(true);
    }, 5000);
  }

  return (
    <>
      <Header />
      <div className="w-full text-right p-4 pt-[100px]">
        <button className="" onClick={logout}>
          Desconectar
        </button>
      </div>

      <section className="w-full flex flex-col items-center py-[30px]">
        {tabelaVisivel ? (
          <>
            <span className="text-[32px] font-semibold mb-[30px]">Produtos registrados</span>
            <div className="flex gap-4">
              <Botao
                cor="custom"
                onClick={enviarArquivoJSON}
                customClass="w-[150px] bg-fifth-neutral hover:border-white p-2 border border-opacity-gray text-black font-bold"
              >
                Atualizar dados
              </Botao>
              <Botao
                cor="custom"
                onClick={novoProduto}
                customClass="w-[150px] bg-fifth-neutral hover:border-white p-2 border border-opacity-gray text-black font-bold"
              >
                Registrar item
              </Botao>
            </div>
            <Layout className="mt-4 min-w-[500px]">
              <Tabela produtos={ordenarProdutos(produtos)} produtoSelecionado={selecionarProduto} produtoExcluido={excluirProduto} />
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
      {exibindoPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-[400px] h-[150px] bg-white p-4 rounded-md flex justify-center items-center">
            {atualizacao
              ? <div className="flex flex-col justify-center items-center gap-2">
                <p className="text-[20px] animate-pulse font-semibold">Atualizando Dados...</p>
                <svg className="animate-spin h-6 w-6 mr-3 ..." xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#001524" d="M11 1h1c6.075 0 11 4.925 11 11s-4.925 11-11 11S1 18.075 1 12v-1h2v1a9 9 0 1 0 9-9h-1z" /></svg>
              </div>
              : <div className="flex flex-col justify-center items-center gap-2">
                <p className="text-[20px] font-semibold text-green-600">Dados atualizados com sucesso!</p>
                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="green" d="M256 16C123.5 16 16 123.5 16 256c0 132.6 107.5 240 240 240c132.6 0 240-107.4 240-240S388.6 16 256 16m0 60c99.4 0 180 80.6 180 180s-80.6 180-180 180S76 355.4 76 256S156.6 76 256 76m91.3 64.2c-6.5 0-12.5 2.4-16.8 8.2c-52 70.1-69 96.5-106 169.8c-8.4-11.1-65.6-72.4-93.9-94.1c-14.2-10.9-41.3 27.2-31.6 37.1C142.6 306.1 220.1 406 232.7 405c21.4-1.7 75.1-136.8 148.8-233.7c8-10.4-15-31.3-34.2-31.1" /></svg>
              </div>
            }
          </div>
        </div>
      )}
    </>
  )
}