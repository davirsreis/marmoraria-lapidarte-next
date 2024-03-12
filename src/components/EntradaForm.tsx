interface EntradaFormProps {
  id?: string
  tipo?: 'text' | 'email' | 'textarea' | 'file' | 'tel'
  valor?: string
  placeholder?: string
  customClass?: string
  textarea?: boolean
  multiple?: boolean
  onChange?: any
}

export function EntradaForm(props: EntradaFormProps) {
  const style = `w-[600px] h-[60px] border border-opacity-gray rounded-lg focus:outline-none px-4 py-2 ${props.customClass}`
  const conteudo = props.textarea
    ? <textarea
      value={props.valor}
      placeholder={props.placeholder}
      className={`${style}`} />
    : <input
      id={props.id}
      type={props.tipo}
      value={props.valor}
      placeholder={props.placeholder}
      multiple={props.multiple}
      onChange={props.onChange}
      className={`${style}`} />
  return (
    conteudo
  )
}