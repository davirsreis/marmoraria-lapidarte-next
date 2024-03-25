import { ProdutoContext } from "@/components/context/ProdutoContext";
import { ApresentacaoPedra } from "@/components/produtos/ApresentacaoPedra";
import { useState, useEffect, useContext, useRef } from "react";
import { ExibirProdutos } from "@/components/produtos/ExibirProdutos";
import { fontePrincipal } from "@/Auxiliares/fontes";
import { Slash } from "@/components/Slash";


export default function Produtos() {
  const [dadosProdutos, setDadosProdutos] = useState<any[]>([]);
  const dados = useContext(ProdutoContext);

  const listaProdutos: string[] = [
    'Marmore',
    'Granito',
    'Quartzo'
  ]

  const nomePedras: any = {
    "Marmore": "Mármores",
    "Granito": "Granitos",
    "Quartzo": "Quartzos"
  };

  const marmoreRef = useRef<HTMLDivElement | null>(null);
  const granitoRef = useRef<HTMLDivElement | null>(null);
  const quartzoRef = useRef<HTMLDivElement | null>(null);

  const refs: { [key: string]: React.RefObject<HTMLDivElement> } = {
    "Mármores": marmoreRef,
    "Granitos": granitoRef,
    "Quartzos": quartzoRef
  };

  useEffect(() => {
    if (dados !== undefined) {
      setDadosProdutos(dados);
    }
  }, [dados]);

  return (
    <>
      {!dados
        ? <Slash />
        : <>
          <section className="flex flex-col w-full bg-third-neutral">
            <h2 className={`text-[24px] smLess:text-[28px] sm:text-[44px] font-semibold text-center pt-[80px] smLess:pt-[100px] sm:pt-[120px] ${fontePrincipal}`}>CONHEÇA NOSSOS PRODUTOS!</h2>
            <div className="flex flex-col items-center gap-10 lgUltra:gap-1 lgUltra:flex-row lg:justify-evenly py-[40px] smLess:py-[60px] sm:py-[80px]">
              <ApresentacaoPedra nome="Mármores" fundo="bg-img_bg_fundo_marmore" texto="O mármore, sinônimo de requinte, é ideal para criar ambientes sofisticados. Com sua elegância atemporal, é perfeito para bancadas de cozinha, revestimentos de banheiro e pisos luxuosos." onClick={() => marmoreRef.current && marmoreRef.current.scrollIntoView({ behavior: "smooth" })} />
              <ApresentacaoPedra nome="Granitos" fundo="bg-img_bg_fundo_granito" texto="Robusto e versátil, o granito é a escolha ideal para ambientes que exigem durabilidade e beleza. Perfeito para bancadas de cozinha, pisos de alta circulação e revestimentos externos, proporcionando um toque de elegância e resistência." onClick={() => granitoRef.current && granitoRef.current.scrollIntoView({ behavior: "smooth" })}/>
              <ApresentacaoPedra nome="Quartzos" fundo="bg-img_bg_fundo_quartzo" texto="Os quartzos são a definição de praticidade e estilo refinado. Com sua composição única de resina e partículas de quartzo natural, esses materiais oferecem uma solução versátil para projetos de design de interiores contemporâneos." onClick={() => quartzoRef.current && quartzoRef.current.scrollIntoView({ behavior: "smooth" })}/>
            </div>
          </section>

          {listaProdutos.map((itemProduto, i) => {
            if (!Array.isArray(dadosProdutos)) {
              return null;
            }

            const produtosFiltrados = dadosProdutos.filter(produto => {
              if (Array.isArray(produto.pedra)) {
                return produto.pedra.includes(itemProduto);
              } else {
                return produto.pedra === itemProduto;
              }
            });

            if (produtosFiltrados.length === 0) {
              return null;
            }

            const referencia = refs[nomePedras[itemProduto]];

            return (
              <section key={i} ref={referencia} className={`py-[45px] smLess:py-[75px] sm:py-[100px] ${i % 2 === 0 ? 'bg-fourth-neutral' : 'bg-third-neutral'}`}>
                <h2 className={`text-center text-[28px] smLess:text-[32px] sm:text-[40px] uppercase font-semibold pb-[45px] smLess:pb-[75px] sm:pb-[100px] ${fontePrincipal}`}>{nomePedras[itemProduto]}</h2>
                <div className="flex justify-center">
                  <ExibirProdutos produtos={produtosFiltrados} tipoPedra={itemProduto} />
                </div>
              </section>
            );
          })}
        </>
      }
    </>
  );
}
