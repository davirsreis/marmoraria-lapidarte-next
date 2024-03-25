import { fontePrincipal } from "@/Auxiliares/fontes";
import { iconArrowDown } from "./icons";
import { useContext, useEffect, useRef, useState } from "react";
import { ProdutoContext } from "./context/ProdutoContext";
import { ExibirProdutos } from "./produtos/ExibirProdutos";
import { Slash } from "./Slash";
import Produto from "@/core/Produto";

interface ProdutoSeparadoProps {
  nome: string;
  texto: string;
  imagem: string
  card1: string;
  card2: string;
  card3: string;
  path1: string;
  path2: string;
  path3: string;
  tipoPedra?: string;
}

interface CardProps {
  path: string;
  textoCard: string;
}

function Card(props: CardProps) {
  return (
    <div className="w-[160px] h-[160px] smLess:w-[180px] smLess:h-[180px] sm:w-[200px] sm:h-[200px] gap-4 flex flex-col justify-center items-center bg-white shadow-2xl hover:shadow-opacity-50-second-blue">
      <div className="w-[50px] h-[50px] sm:w-[75px] sm:h-[75px]">
        <img src={props.path} alt={`Ícone ${props.textoCard}`} />
      </div>
      <p className="text-black text-base smLess:text-[20px] sm:text-[24px] text-center w-[150px]">{props.textoCard}</p>
    </div>
  );
}

export function ProdutoSeparado(props: ProdutoSeparadoProps) {
  const referencia = useRef<HTMLDivElement | null>(null);
  const dados = useContext(ProdutoContext);
  const [dadosFiltrados, setDadosFiltrados] = useState<Produto[]>([]);

  useEffect(() => {
    if (!dados) return;
    const tipoPedra = props.tipoPedra || '';
    const dadosFiltrados = dados.filter((produto: Produto) => {
      return produto.pedra.includes(tipoPedra);
    });
    setDadosFiltrados(dadosFiltrados);
  }, [dados, props.tipoPedra]);

  return (
    <>
      {!dados || !Array.isArray(dados) || dados.length === 0 ? (
        <Slash />
      ) : (
        <section>
          <section className={`w-full lg:h-[700px] lgPlus:h-[800px] bg-no-repeat bg-center bg-cover ${props.imagem}`}>
            <div className="flex h-full w-full md:w-2/3 lg:w-1/2">
              <div className="w-full h-full flex flex-col justify-center items-center bg-opacity-black pt-[100px]">
                <h1 className={`text-white text-[24px] smLess:text-[36px] sm:text-[44px] ${fontePrincipal}`}>{props.nome}</h1>
                <p className={`w-[350px] sm:w-[500px] md:w-[500px] lg:w-[450px] lgPlus:w-[580px] lgUltra:w-[650px] py-[16px] smLess:py-[24px] sm:py-[48px] text-white text-base smLess:text-[20px] sm:text-[26px] md:text-[28px] text-justify ${fontePrincipal}`}>{props.texto}</p>
                <button onClick={() => referencia.current && referencia.current.scrollIntoView({ behavior: "smooth" })}>
                  <div className="h-8 w-8 smLess:h-12 smLess:w-12 sm:h-16 sm:w-16 animate-bounce">
                    {iconArrowDown}
                  </div>
                </button>
              </div>
            </div>
          </section>
          <section className="flex flex-col justify-center items-center py-12 smLess:py-16 sm:py-20">
            <p className={`text-[22px] smLess:text-[28px] sm:text-[32px] ${fontePrincipal}`}>Os <span className="lowercase">Mármores</span> são <span className="text-second-blue">ideais</span> para:</p>
            <div className="w-[300px] sm:w-[700px] flex flex-col sm:flex-row gap-4 smLess:gap-8 sm:gap-12 justify-center items-center pt-10">
              <Card textoCard={props.card1} path={props.path1} />
              <Card textoCard={props.card2} path={props.path2} />
              <Card textoCard={props.card3} path={props.path3} />
            </div>
          </section>
          <section className="py-12 smLess:py-16 sm:py-20 bg-third-neutral" ref={referencia}>
            <h2 className={`text-center text-[28px] smLess:text-[32px] sm:text-[40px] uppercase font-semibold pb-[45px] smLess:pb-[75px] sm:pb-[100px] ${fontePrincipal}`}>{props.nome}</h2>
            <div className="flex justify-center">
              <ExibirProdutos produtos={dadosFiltrados} tipoPedra={props.tipoPedra} />
            </div>
          </section>
        </section>
      )}
    </>
  );
}
