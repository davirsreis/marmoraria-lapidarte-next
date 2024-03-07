import Produto from "../../core/Produto"
import { IconeEdit, IconeTrash } from "./Icones"

interface TabelaProps {
  produtos: Produto[]
  produtoSelecionado?: (produto: Produto) => void
  produtoExcluido?: (produto: Produto) => void
}

export default function Tabela(props: TabelaProps) {

  const exibirAcoes = props.produtoExcluido || props.produtoSelecionado

  function renderizarCabecalho() {
    const thClass = "text-left p-4 text-white"
    return (
      <tr>
        {/* <th className={thClass}>Código</th> */}
        <th className={thClass}>Nome</th>
        <th className={thClass}>Pedra</th>
        <th className={thClass}>linkImg</th>
        {exibirAcoes ? <th className="p-4 text-white">Ações</th> : false}
      </tr>
    )
  }

  function renderizarDados() {
    return props.produtos?.map((produto, i) => {
      const tdClass = "text-left p-4 truncate max-w-[100px] md:max-w-[200px] lg:max-w-[300px]"
      return (
        <tr key={produto.id} className={`${i % 2 === 0 ? 'bg-fifth-neutral' : 'bg-primary-neutral'}`}>
          {/* <td className={tdClass}>{produto.id}</td> */}
          <td className={tdClass}>{produto.nome}</td>
          <td className={tdClass}>{produto.pedra}</td>
          <td className={tdClass}>{produto.linkImg}</td>
          {exibirAcoes ? renderizarAcoes(produto) : false}
        </tr>
      )
    })
  }

  function renderizarAcoes(produto: Produto) {
    const style = `
      flex justify-center- items-center
      rounded-full p-2 m-1
      bg-white hover:bg-gray-100
    `
    return (
      <td className="flex justify-center">
        {props.produtoSelecionado ? (
          <button onClick={() => props.produtoSelecionado?.(produto)} className={`text-green-600 ${style}`}>{IconeEdit}</button>
        ) : false}
        {props.produtoExcluido ? (
          <button onClick={() => props.produtoExcluido?.(produto)} className={`text-red-500 ${style}`}>{IconeTrash}</button>
        ) : false}
      </td>
    )
  }

  return (
    <table className="w-full rounded-xl overflow-hidden">
      <thead>{renderizarCabecalho()}</thead>
      <tbody>{renderizarDados()}</tbody>

    </table>
  )


}