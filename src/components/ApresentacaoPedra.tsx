import { fontePrincipal } from "@/Auxiliares/fontes";
import { Botao } from "./Botao";

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


{/* <div className="w-[350px] h-[300px] smLess:w-[400px] smLess:h-[400px] sm:w-[450px] sm:h-[450px] flex flex-col justify-center items-center bg-fourth-neutral border border-bg-opacity-20-blue rounded-[10px]">
<span className="text-[28px] smLess:text-[32px] sm:text-[38px] font-semibold text-primary-blue">{props.nome}</span>
<div className="w-[300px] smLess:w-[340px] sm:w-[390px] py-2 border-b-[1px] border-opacity-gray"></div>
<span className="w-[300px] smLess:w-[340px] sm:w-[390px] text-base smLess:text-lg sm:text-[20px] h-[160px] smLess:h-[180px] sm:h-[200px] text-justify">{props.texto}</span>
<Botao customClass="my-[20px] sm:my-[40px]" cor="azul" onClick={props.onClick}>Consultar opções</Botao>
</div> */}