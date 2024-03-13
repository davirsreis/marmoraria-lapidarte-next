import { Botao } from "./Botao";

interface ApresentacaoPedraProps {
  nome: string
  texto: string
}

export function ApresentacaoPedra(props: ApresentacaoPedraProps) {
  return (
    <div className="w-[450px] h-[450px] flex flex-col justify-center items-center bg-fourth-neutral border border-bg-opacity-20-blue rounded-[10px]">
      <span className="text-[38px] font-semibold text-primary-blue">{props.nome}</span>
      <div className="w-[390px] py-2 border-b-[1px] border-opacity-gray"></div>
      <span className="w-[390px] text-[20px] h-[200px] text-justify">{props.texto}</span>
      <Botao customClass="mt-[60px]" cor="azul">Consultar opções</Botao>
    </div>
  );
}