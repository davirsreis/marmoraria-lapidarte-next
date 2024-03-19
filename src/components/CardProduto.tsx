interface CardProdutoProps {
  nome: string
  path: string
}

export function CardProduto(props: CardProdutoProps) {
  return (
    <div className="relative w-[170px] h-[170px] smLess:w-[180px] smLess:h-[180px] sm:w-[250px] sm:h-[250px] text-white shadow-lg rounded-[10px] bg-no-repeat bg-center bg-cover bg-white"
      style={{ backgroundImage: `url(${props.path})` }}>
      <div className="flex justify-center items-center absolute bottom-0 w-full h-[30px] sm:h-[39px] bg-opacity-gray rounded-b-[10px]">
        <span className="text-white font-bold uppercase text-xs sm:text-base">{props.nome}</span>
      </div>
    </div>

  )
}
