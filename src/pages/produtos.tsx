import { ApresentacaoPedra } from "@/components/ApresentacaoPedra";
import { ExibirProdutos } from "@/components/ExibirProdutos";
import { Slash } from "@/components/Slash";
import { ProdutoContext } from "@/components/context/ProdutoContext";

import { useState, useEffect, useContext } from "react";

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
            <h2 className="text-[44px] font-semibold text-center pt-[60px]">CONHEÇA NOSSOS PRODUTOS!</h2>

            <div className="flex flex-col items-center gap-10 lgUltra:gap-1 lgUltra:flex-row lg:justify-evenly py-[120px]">
              <ApresentacaoPedra nome="Mármores" texto="O mármore, sinônimo de requinte, é ideal para criar ambientes sofisticados. Com sua elegância atemporal, é perfeito para bancadas de cozinha, revestimentos de banheiro e pisos luxuosos." />
              <ApresentacaoPedra nome="Granitos" texto="Robusto e versátil, o granito é a escolha ideal para ambientes que exigem durabilidade e beleza. Perfeito para bancadas de cozinha, pisos de alta circulação e revestimentos externos, proporcionando um toque de elegância e resistência." />
              <ApresentacaoPedra nome="Quartzos" texto="Os quartzos são a definição de praticidade e estilo refinado. Com sua composição única de resina e partículas de quartzo natural, esses materiais oferecem uma solução versátil para projetos de design de interiores contemporâneos." />
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

            return (
              <section key={i} className={`py-[120px] ${i % 2 === 0 ? 'bg-fourth-neutral' : 'bg-third-neutral'}`}>
                <h2 className="text-center text-[40px] uppercase font-semibold pb-[120px]">{nomePedras[itemProduto]}</h2>
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
