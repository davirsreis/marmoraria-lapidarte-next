interface EntradaFormProps {
  id?: string
  tipo?: 'text' | 'email' | 'textarea' | 'file' | 'tel'
  texto?: string
  textoComplemento?: string
  valor?: any
  placeholder?: string
  customClass?: string
  textarea?: boolean
  multiple?: boolean
  onChange?: any
  accept?: string
  required?: boolean
  valorMudou?: (valor: any) => void
}

export function EntradaForm(props: EntradaFormProps) {
  const style = `w-[350px] smLess:w-[400px] sm:w-[600px] h-[60px] border border-opacity-gray rounded-lg focus:outline-none px-4 py-2 ${props.customClass}`;

  const validarNome = (valor: string) => {
    // Remove todos os caracteres que não são letras ou espaços
    const nomeApenas = valor.replace(/[^A-Za-z\s]/g, '');;
    props.valorMudou?.(nomeApenas); // Atualiza o valor com apenas letras e espaços
  };
  
  

  const conteudo = props.textarea ? (
    <textarea
      value={props.valor}
      required={props.required}
      placeholder={props.placeholder}
      className={`${style}`}
      onChange={e => props.valorMudou?.(e.target.value)}
    />
  ) : (
    <input
      id={props.id}
      type={props.tipo}
      value={props.valor}
      required={props.required}
      placeholder={props.placeholder}
      accept={props.accept}
      multiple={props.multiple}
      maxLength={props.tipo === 'tel' ? 11 : undefined}
      onChange={e => {
        if (props.tipo === 'text' && props.id === 'nome') {
          validarNome(e.target.value); 
        } else if (props.tipo === 'tel') {
          const valorDigitado = e.target.value.replace(/\D/g, '');
          props.valorMudou?.(valorDigitado);
        } else {
          props.valorMudou?.(e.target.value);
        }
      }}
      className={`${style}`}
    />
  );

  return (
    <div>
      <label className="flex flex-col">
        <div className="flex">
          {props.texto}
          {props.required && <span className="text-red-500">*</span>}
          <span className="text-opacity-black">{props.textoComplemento}</span>
        </div>
        {conteudo}
      </label>
    </div>
  );
}

