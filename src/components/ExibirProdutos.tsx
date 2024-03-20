import { CardProduto } from "./CardProduto";
import Produto from "@/core/Produto";

interface ExibirProdutosProps {
  tipoPedra?: string
  produtos: Produto[]
}

export function ExibirProdutos(props: ExibirProdutosProps) {
  return (
    <div className="grid grid-cols-2 lgPlus:grid-cols-3 lgUltra:grid-cols-5 gap-5 lg:gap-10">
      {props.produtos?.map((produto, i) => (
        props.tipoPedra === undefined || produto.pedra.includes(props.tipoPedra)
        ? <CardProduto key={i} nome={produto.nome} path={produto.linkImg} />
        : null
      ))}
    </div>
  )
}
