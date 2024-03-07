import Produto from "@/core/Produto";
import { CardProduto } from "./CardProduto";
import useProdutos from "@/hooks/useProdutos";

interface ExibirProdutosProps {
  tipoPedra?: string
  produtos: Produto[]
}

export function ExibirProdutos(props: ExibirProdutosProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3  gap-5 lg:gap-20">
      {props.produtos?.map((produto, i) => (
        produto.pedra==props.tipoPedra 
        ? <CardProduto key={i} nome={produto.nome} path={produto.linkImg} />
        : null
      ))}
    </div>
  )
}
