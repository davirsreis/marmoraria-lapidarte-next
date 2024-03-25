import { fontePrincipal } from "@/Auxiliares/fontes";
import { Botao } from "../Botao";

interface ApresentacaoPedraProps {
  nome: string
  texto: string
  fundo: string
  onClick?: any
}

export function ApresentacaoPedra(props: ApresentacaoPedraProps) {
  return (
    <div className="w-[350px]  smLess:w-[390px] sm:w-[450px] flex flex-col bg-fourth-neutral rounded-[10px] shadow-2xl hover:shadow-opacity-50-second-blue">
      <div className={`w-full h-[140px] smLess:h-[150px] sm:h-[200px]  bg-opacity-20-blue bg-no-repeat bg-center bg-cover rounded-t-[10px] ${props.fundo}`} />
      <div className="flex flex-col justify-center items-center mt-4 smLess:mt-6 sm:mt-8">
        <span className={`text-[20px] smLess:text-[24px] sm:text-[28px] font-bold text-second-blue uppercase ${fontePrincipal}`}>{props.nome}</span>
        <div className="w-[240px] smLess:w-[270px] sm:w-[300px] my-2 border-b-[1px] border-opacity-50-second-blue" />
        <span className={`w-[290px] h-[150px] smLess:w-[340px] smLess:h-[140px] sm:w-[390px] sm:h-[150px] text-sm sm:text-base text-justify text-second-blue`}>{props.texto}</span>
        <Botao cor="azulAlternativo" customClass="font-semibold p-2 w-[100px] mb-2" onClick={props.onClick}>
          Verificar
        </Botao>
      </div>
    </div>
  );
}