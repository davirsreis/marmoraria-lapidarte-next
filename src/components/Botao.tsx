import { fontePrincipal } from "@/Auxiliares/fontes"

interface BotaoProps {
  customClass?: string
  children?: any
  onClick?: () => void
  cor: 'azul' | 'vermelho' | 'verde' | 'custom' | 'azulAlternativo'
}

export function Botao(props: BotaoProps) {

  const colorVariants = {
    azul: ['bg-second-blue text-white hover:bg-white border border-second-blue hover:border hover:border-second-blue  hover:text-second-blue', 'text-base sm:text-[24px]'],
    azulAlternativo: ['bg-second-blue text-white hover:bg-white border border-second-blue hover:border hover:border-second-blue  hover:text-second-blue', 'text-base sm:text-[18px]'],
    vermelho: ['bg-red-400 hover:bg-red-700 border border-opacity-gray rounded-lg', 'text-[20px] text-black'],
    verde: ['bg-green-400 hover:bg-green-700 border border-opacity-gray rounded-lg', 'text-[20px] text-black'],
    custom: ''
  }
  return (
    <button onClick={props.onClick} className={`flex justify-center items-center rounded-[10px] ${props.customClass} ${colorVariants[props.cor][0]} ${fontePrincipal}`}>
      <span className={`${colorVariants[props.cor][1]}`}>{props.children}</span>
    </button>
  )
}