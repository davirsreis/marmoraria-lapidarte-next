import { Botao } from "./Botao";

interface ApresentacaoPedraProps {
  nome: string
  texto: string
  onClick?: any
}

export function ApresentacaoPedra(props: ApresentacaoPedraProps) {
  return (
    <div className="w-[350px] h-[300px] smLess:w-[400px] smLess:h-[400px] sm:w-[450px] sm:h-[450px] flex flex-col justify-center items-center bg-fourth-neutral border border-bg-opacity-20-blue rounded-[10px]">
      <span className="text-[28px] smLess:text-[32px] sm:text-[38px] font-semibold text-primary-blue">{props.nome}</span>
      <div className="w-[300px] smLess:w-[340px] sm:w-[390px] py-2 border-b-[1px] border-opacity-gray"></div>
      <span className="w-[300px] smLess:w-[340px] sm:w-[390px] text-base smLess:text-lg sm:text-[20px] h-[160px] smLess:h-[180px] sm:h-[200px] text-justify">{props.texto}</span>
      <Botao customClass="my-[20px] sm:my-[40px]" cor="azul" onClick={props.onClick}>Consultar opções</Botao>
    </div>
  );
}