import { useWindowSize } from "@/hooks/useWindowSize";
import { fontePrincipal } from "@/Auxiliares/fontes";
import { useEffect, useState } from "react";
import { ItemSobre } from "./ItemSobre";
import LogoLapidarte from '@/assets/logoLapidarte.png'
import IconBanheiro from '@/assets/iconBanheiro.png'
import IconCozinha from '@/assets/iconCozinha.png'
import IconMesa from '@/assets/iconMesa.png'
import IconPiso from '@/assets/iconPiso.png'
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
            <ItemSobre img={'https://firebasestorage.googleapis.com/v0/b/marmorarialapidarteofc.appspot.com/o/imagensAplicacao%2FcozinhaIcon2.png?alt=media&token=cec2ba50-0f91-46a8-8453-bb418bf2c344'} text="Bancadas de cozinha" customClass="pb-9 border-b-[1px] border-opacity-gray" />
            <ItemSobre img={'https://firebasestorage.googleapis.com/v0/b/marmorarialapidarteofc.appspot.com/o/imagensAplicacao%2FbanheiroIcon2.png?alt=media&token=b6a3fc15-3b6f-408a-86ab-bccdb6d3379f'} text="Banheiros" customClass="pb-9 border-b-[1px] border-opacity-gray" />
            <ItemSobre img={'https://firebasestorage.googleapis.com/v0/b/marmorarialapidarteofc.appspot.com/o/imagensAplicacao%2FmesaIconColorido.png?alt=media&token=904a6852-2ec6-45da-b5dc-f5d4e89999a7'} text="Mesas" customClass="pb-9 border-b-[1px] border-opacity-gray" />
            <ItemSobre img={'https://firebasestorage.googleapis.com/v0/b/marmorarialapidarteofc.appspot.com/o/imagensAplicacao%2FpisoIconColorido.png?alt=media&token=a8026d2d-9b8d-49a7-a714-d575c58d3a5b'} text="Pisos e revestimentos" />
          </ul>
        </div>
        <div className="lgPlus:mt-0 sm:py-16 flex items-center justify-center">
          <Image
            src={'https://firebasestorage.googleapis.com/v0/b/marmorarialapidarteofc.appspot.com/o/imagensAplicacao%2Fbathroom2.jpg?alt=media&token=26413504-6163-4d8b-ba41-00014c1179ad'}
            alt="Imagem mesa de mármore"
            width={imageWidth} height={0}
            className="rounded-[10px]"
          />
        </div>
      </div>
    </section>
  )
}