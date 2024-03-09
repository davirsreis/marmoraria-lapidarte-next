import { ItemSobre } from "./ItemSobre";

import Image from "next/image";
import { CardProduto } from "./CardProduto";
import carraraImg from '@/assets/marmores/carrara.jpg'
import { Botao } from "./Botao";
import Link from "next/link";

export function SectionProdutos() {
  return (
    <section className="w-full flex flex-col items-center bg-fourth-neutral py-[120px]">
      <h1 className="text-[44px] font-semibold pb-[80px] text-center">CONHEÇA NOSSOS PRODUTOS!</h1>
      <div className="grid grid-rows-3 lgPlus:grid-rows-2 grid-flow-col gap-x-[20px] sm:gap-x-[100px] lg:gap-x-[175px] gap-y-20">
        <CardProduto
          nome="Carrara"
          path="carrara" />
        <CardProduto
          nome="Carrara"
          path="carrara" />
        <CardProduto
          nome="Carrara"
          path="carrara" />
        <CardProduto
          nome="Carrara"
          path="carrara" />
        <CardProduto
          nome="Carrara"
          path="carrara" />
        <CardProduto
          nome="Carrara"
          path="carrara" />
      </div>
      <Link href="/produtos" passHref>
        <Botao
          cor="azul"
          customClass="mt-20">
          VER TODOS OS PRODUTOS
        </Botao>
      </Link>
    </section>
  )
}