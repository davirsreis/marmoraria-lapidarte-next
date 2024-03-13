import Produto from "@/core/Produto"

interface CardProdutoProps {
  nome: string
  path: string
}

export function CardProduto(props: CardProdutoProps) {
  return (
    <div className="relative w-[250px] h-[250px] text-white shadow-lg rounded-[10px] bg-no-repeat bg-center bg-cover bg-white"
      style={{ backgroundImage: `url(${props.path})` }}>
      <div className="flex justify-center items-center absolute bottom-0 w-full h-[39px] bg-opacity-gray rounded-b-[10px]">
        <span className="text-white font-bold uppercase">{props.nome}</span>
      </div>
    </div>

  )
}
