interface BotaoProps {
  customClass?: string
  text: string
}

export function Botao(props: BotaoProps) {
  return (
    <button className={`flex justify-center items-center bg-primary-blue hover:bg-second-blue p-4 rounded-[10px] ${props.customClass}`}>
      <span className="text-primary-neutral text-[24px]">{props.text}</span>
    </button>
  )
}