interface BotaoProps {
  customClass?: string
  children?: any
  onClick?: () => void
  cor: 'azul' | 'vermelho' | 'verde' | 'custom'
}

export function Botao(props: BotaoProps) {

  const colorVariants = {
    azul: ['bg-primary-blue hover:bg-second-blue', 'text-[24px] text-primary-neutral'],
    vermelho: ['bg-red-400 hover:bg-red-700 border border-opacity-gray rounded-lg', 'text-[20px] text-primary-blue'],
    verde: ['bg-green-400 hover:bg-green-700 border border-opacity-gray rounded-lg', 'text-[20px] text-primary-blue'],
    custom: ''
  }
  return (
    <button onClick={props.onClick} className={`flex justify-center items-center p-2 rounded-[10px] ${props.customClass} ${colorVariants[props.cor][0]}`}>
      <span className={`${colorVariants[props.cor][1]}`}>{props.children}</span>
    </button>
  )
}