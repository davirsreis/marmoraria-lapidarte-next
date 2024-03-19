import { CardProduto } from "./CardProduto";
import { Botao } from "./Botao";
import Link from "next/link";

export function SectionProdutos() {
  return (
    <section className="w-full flex flex-col items-center bg-fourth-neutral py-[60px] sm:py-[120px]">
      <h1 className="text-2xl smLess:text-3xl sm:text-[44px] font-semibold pb-[80px] text-center">CONHEÇA NOSSOS PRODUTOS!</h1>
      <div className="grid grid-cols-2 lgPlus:grid-cols-3 grid-flow-row gap-x-[16px] smLess:gap-x-[40px] sm:gap-x-[100px] lg:gap-x-[175px] gap-y-4 smLess:gap-y-10 sm:gap-y-20 ">
        <CardProduto
          nome="Mármore Crema Marfil"
          path="https://firebasestorage.googleapis.com/v0/b/marmorarialapidarte-a5e50.appspot.com/o/images%2FcremaMarfil.jpg?alt=media&token=f62c2c7b-fe9f-4e09-872f-46da721c3f81" />
        <CardProduto
          nome="Mármore Calacatta"
          path="https://firebasestorage.googleapis.com/v0/b/marmorarialapidarte-a5e50.appspot.com/o/images%2Fcalacatta.jpg?alt=media&token=a852d65d-fc2c-4dde-9518-93a91a23c297" />
        <CardProduto
          nome="Mármore Nero Marquina"
          path="https://firebasestorage.googleapis.com/v0/b/marmorarialapidarte-a5e50.appspot.com/o/images%2FneroMarquina.jpg?alt=media&token=fe981c4b-df8c-4f91-a35b-b570126da6ab" />
        <CardProduto
          nome="Granito Verde Labrador"
          path="https://firebasestorage.googleapis.com/v0/b/marmorarialapidarte-a5e50.appspot.com/o/images%2FGranitoVerdeUbatuba.jpg?alt=media&token=22b60e7c-bd19-4499-a7bf-97db94daba8f" />
        <CardProduto
          nome="Granito Santa Cecília"
          path="https://firebasestorage.googleapis.com/v0/b/marmorarialapidarte-a5e50.appspot.com/o/images%2FGranitoSantaCec%C3%ADliaLight.jpg?alt=media&token=67f54195-8bc9-415f-b00a-ed601090f1df" />
        <CardProduto
          nome="Quartzo Dekton Aura"
          path="https://firebasestorage.googleapis.com/v0/b/marmorarialapidarte-a5e50.appspot.com/o/images%2FquartzoDektonAura.jpg?alt=media&token=97470260-9634-407b-b97a-dcddf7adfc81" />
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