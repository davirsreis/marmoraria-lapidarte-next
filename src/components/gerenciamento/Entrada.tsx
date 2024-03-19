interface EntradaProps {
  tipo?: 'text' | 'number' | 'textarea' | 'file'
  texto?: string;
  valor?: any
  somenteLeitura?: boolean
  className?: string
  placeHolder?: string
  isSelection?: boolean
  selections?: string[]
  disabled?: boolean
  valorMudou?: (valor: any) => void
}


export default function Entrada(props: EntradaProps) {

  const style = `
  border border-opacity-gray rounded-lg
  focus:outline-none bg-fourth-neutral px-2 sm:px-4 py-2
  ${props.somenteLeitura ? '' : 'focus:bg-white'}`

  return (
    <div className={`flex flex-col ${props.className}`}>
      <label className="mb-2 font-semibold">
        {props.texto}
      </label>
      {props.isSelection
        ?
        <select
          className={style}
          value={props.isSelection ? (Array.isArray(props.valor) ? props.valor[0] : props.valor) : ''}
          onChange={e => props.valorMudou?.(e.target.value)}
        >
          <option value="" hidden>
            Selecione uma opção
          </option>
          {props.selections?.map((selection, i) => (
            <option key={i} value={selection}>
              {selection}
            </option>
          ))}
        </select>



        :
        <input
          type={props.tipo ?? 'text'}
          value={props.valor}
          readOnly={props.somenteLeitura}
          placeholder={props.placeHolder}
          onChange={e => props.valorMudou?.(e.target.value)}
          className={style}
          disabled={props.disabled}
        />
      }

    </div>
  )
}