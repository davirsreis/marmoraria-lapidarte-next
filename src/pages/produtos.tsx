import { Botao } from "@/components/Botao";
import { CardProduto } from "@/components/CardProduto";
import { ExibirProdutos } from "@/components/ExibirProdutos";
import useProdutos from "@/hooks/useProdutos";

export default function Produtos() {
  const { produto, produtos } = useProdutos()
  const listaProdutos: string[] = [
    'Marmore',
    'Granito',
    'Quartzo'
  ]

  return (
    <>
      <section className="flex flex-col w-full bg-third-neutral">
        <h2 className="text-[44px] font-semibold text-center pt-[60px]">CONHEÇA NOSSOS PRODUTOS!</h2>
        <div className="flex flex-col items-center gap-20 lg:flex-row lg:justify-evenly py-[120px]">
          <div className="w-[450px] h-[450px] flex flex-col justify-center items-center bg-fourth-neutral border border-bg-opacity-20-blue rounded-[10px]">
            <span className="text-[38px] font-semibold text-primary-blue">Mármore</span>
            <div className="w-[390px] py-2 border-b-[1px] border-opacity-gray"></div>
            <span className="w-[390px] text-[20px] h-[200px] text-justify">O mármore, sinônimo de requinte, é ideal para criar ambientes sofisticados. Com sua elegância atemporal, é perfeito para bancadas de cozinha, revestimentos de banheiro e pisos luxuosos.</span>
            <Botao customClass="mt-[60px]" cor="azul">Consultar opções</Botao>
          </div>
          <div className="w-[450px] h-[450px] flex flex-col justify-center items-center bg-fourth-neutral border border-bg-opacity-20-blue rounded-[10px]">
            <span className="text-[38px] font-semibold text-primary-blue">Granito</span>
            <div className="w-[390px] py-2 border-b-[1px] border-opacity-gray"></div>
            <span className="w-[390px] text-[20px] h-[200px] text-justify">Robusto e versátil, o granito é a escolha ideal para ambientes que exigem durabilidade e beleza. Perfeito para bancadas de cozinha, pisos de alta circulação e revestimentos externos, proporcionando um toque de elegância e resistência.</span>
            <Botao customClass="mt-[60px]" cor="azul">Consultar opções</Botao>
          </div>
        </div>
      </section>
      {listaProdutos.map((itemProduto, i) => {
        const produtosFiltrados = produtos.filter(produto => {
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
            <h2 className="text-center text-[40px] uppercase font-semibold pb-[120px]">{itemProduto}</h2>
            <div className="flex justify-center">
              <ExibirProdutos produtos={produtosFiltrados} tipoPedra={itemProduto} />
            </div>
          </section>
        );
      })}
    </>
  );
}