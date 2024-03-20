import { useWindowSize } from "@/hooks/useWindowSize";
import { fontePrincipal } from "@/Auxiliares/fontes";
import { produtos } from "@/Auxiliares/Valores";
import { CardProduto } from "./CardProduto";
import { useEffect, useState } from "react";
import { Botao } from "./Botao";
import Link from "next/link";

export function SectionProdutos() {
  const [countCard, setCountCard] = useState(10);
  const windowSize = useWindowSize();

  useEffect(() => {
    setCountCard(windowSize.width < 1400 ? 6 : 10);
  }, [windowSize]);

  const produtosFiltrados = countCard === 6 ? produtos.filter(produto => !produto.ocultar) : produtos;

  return (
    <section className="w-full flex flex-col items-center bg-fourth-neutral py-[60px] sm:py-[120px]">
      <h1 className={`text-2xl smLess:text-3xl sm:text-[44px] font-semibold pb-[80px] text-center ${fontePrincipal}`}>CONHEÇA NOSSOS PRODUTOS!</h1>
      <div className="grid grid-cols-2 lgPlus:grid-cols-3 lgUltra:grid-cols-5 gap-5 lg:gap-10">
        {produtosFiltrados.slice(0, countCard).map((produto, index) => (
          <CardProduto key={index} nome={produto.nome} path={produto.path} />
        ))}
      </div>
      <Link href="/produtos" passHref>
        <Botao cor="azul" customClass="mt-20 p-2 sm:p-4">
          MAIS PRODUTOS
        </Botao>
      </Link>
    </section>
  );
}
