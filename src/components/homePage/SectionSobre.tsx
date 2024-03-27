import { useWindowSize } from "@/hooks/useWindowSize";
import { fontePrincipal } from "@/Auxiliares/fontes";
import { useEffect, useState } from "react";
import { ItemSobre } from "./ItemSobre";
import LogoLapidarte from '@/assets/logoLapidarte.png'
import Image from "next/image";

export function SectionSobre() {

  const [imageWidth, setImageWidth] = useState(600);
  const windowSize = useWindowSize();

  useEffect(() => {
    if (windowSize.width < 376) {
      setImageWidth(350);
    } else if (windowSize.width < 600) {
      setImageWidth(375);
    } else if (windowSize.width < 640) {
      setImageWidth(400);
    } else {
      setImageWidth(550);
    }
  }, [windowSize]);


  return (
    <section className="w-full flex flex-col bg-third-neutral pb-[80px] sm:pb-[100px] pt-[60px]">
      <div className="flex flex-col items-center pb-20">
        <Image
          src={LogoLapidarte}
          alt="Logo Lapidarte"
          className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px]"
        />
        <h1 className={`text-2xl sm:text-[32px] ${fontePrincipal}`}>
          Marmoraria Lapidarte
        </h1>
        <p>Brasília-DF</p>
      </div>
      <div className="flex flex-col lgPlus:flex-row lgPlus:justify-evenly items-center w-full mx-auto gap-20">
        <div className="w-[350px] smLess:w-[400px] sm:w-[564px]">
          <h2 className={`text-primary-gray text-[32px] sm:text-[48px] font-semibold leading-tight mb-6 ${fontePrincipal}`}>Melhores soluções para o seu projeto</h2>
          <p className={`mb-16 text-second-gray`}>Atendimento e serviço especializado, oferecendo uma grande diversidade de mármores.</p>
          <ul className="flex flex-col items-start gap-9">
            <ItemSobre img={'https://firebasestorage.googleapis.com/v0/b/marmoraria-lapidarte.appspot.com/o/imagensDaAplicacao%2FcozinhaIcon2.png?alt=media&token=70bb71bf-8ca8-4408-b5ee-c8b8bd637264'} text="Bancadas de cozinha" customClass="pb-9 border-b-[1px] border-opacity-gray" />
            <ItemSobre img={'https://firebasestorage.googleapis.com/v0/b/marmoraria-lapidarte.appspot.com/o/imagensDaAplicacao%2FbanheiroIcon2.png?alt=media&token=1c697fcb-baec-43c6-8d85-233fdc5fcb50'} text="Banheiros" customClass="pb-9 border-b-[1px] border-opacity-gray" />
            <ItemSobre img={'https://firebasestorage.googleapis.com/v0/b/marmoraria-lapidarte.appspot.com/o/imagensDaAplicacao%2FmesaIconColorido.png?alt=media&token=d8f8c010-6318-4f10-8e84-9f189c9a2884'} text="Mesas" customClass="pb-9 border-b-[1px] border-opacity-gray" />
            <ItemSobre img={'https://firebasestorage.googleapis.com/v0/b/marmoraria-lapidarte.appspot.com/o/imagensDaAplicacao%2FpisoIconColorido.png?alt=media&token=39b13fb6-a221-4cfb-a33d-d17e18c0c973'} text="Pisos e revestimentos" />
          </ul>
        </div>
        <div className="lgPlus:mt-0 sm:py-16 flex items-center justify-center">
          <Image
            src={'https://firebasestorage.googleapis.com/v0/b/marmoraria-lapidarte.appspot.com/o/imagensDaAplicacao%2Fbathroom2.jpg?alt=media&token=14e399f3-b94c-43e1-9fc5-241871185ff2'}
            alt="Imagem mesa de mármore"
            width={imageWidth}
            height={imageWidth}
            className="rounded-[10px]"
          />
        </div>
      </div>
    </section>
  )
}