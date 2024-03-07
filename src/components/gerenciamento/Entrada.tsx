interface EntradaProps {
  tipo?: 'text' | 'number'
  texto: string;
  valor: any
  somenteLeitura?: boolean
  className?: string
  placeHolder?: string
  valorMudou?: (valor: any) => void
}


export default function Entrada(props: EntradaProps) {
  const style = `
  border border-opacity-gray rounded-lg
  focus:outline-none bg-fourth-neutral px-4 py-2
  ${props.somenteLeitura ? '' : 'focus:bg-white'}`

  return (
    <div className={`flex flex-col ${props.className}`}>
      <label className="mb-2 font-semibold">
        {props.texto}
      </label>
      {props.somenteLeitura
        ?
        <input value={props.valor} className={style} disabled />
        :
        <input
          type={props.tipo ?? 'text'}
          value={props.valor}
          readOnly={props.somenteLeitura}
          placeholder={props.placeHolder}
          onChange={e => props.valorMudou?.(e.target.value)}
          className={style}
        />
      }
    </div>
  )
}