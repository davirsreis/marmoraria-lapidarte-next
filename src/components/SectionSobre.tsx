import { ItemSobre } from "./ItemSobre";
import LogoLapidarte from '@/assets/logoLapidarte.png'
import IconCozinha from '@/assets/iconCozinha.png'
import IconBanheiro from '@/assets/iconBanheiro.png'
import IconPiso from '@/assets/iconPiso.png'
import Image from "next/image";
import { useWindowSize } from "@/hooks/useWindowSize";
import { Kameron } from "next/font/google";
import { useEffect, useState } from "react";

const kameron = Kameron({
  subsets: ["latin"],
  weight: ['400']
});

const IconMesa = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="black" d="m6.73 19.02l1.347-3.347q.129-.286.388-.47q.26-.184.577-.184H11.5v-4.813q-3.421-.068-5.74-.856q-2.318-.788-2.318-1.85q0-1.142 2.483-1.927Q8.408 4.788 12 4.788q3.598 0 6.078.785q2.48.785 2.48 1.927q0 1.08-2.328 1.86q-2.328.778-5.73.846v4.813h2.458q.311 0 .574.184q.262.184.391.47l1.346 3.346h-1.038l-1.2-3H8.969l-1.2 3zM12 9.211q2.694 0 4.854-.502t2.64-1.21q-.48-.708-2.64-1.21T12 5.788q-2.694 0-4.854.502T4.506 7.5q.48.708 2.64 1.21T12 9.212M12 7.5" /></svg>

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
        <h1 className={`text-2xl sm:text-[32px] `}>
          Marmoraria Lapidarte
        </h1>
        <p>Brasília-DF</p>
      </div>
      <div className="flex flex-col lgPlus:flex-row lgPlus:justify-evenly items-center w-full mx-auto gap-20">
        <div className="w-[350px] smLess:w-[400px] sm:w-[564px]">
          <h2 className="text-primary-gray text-[32px] sm:text-[48px] font-semibold leading-tight mb-6">Melhores soluções para o seu projeto</h2>
          <p className="mb-16 text-second-gray">Atendimento e serviço especializado, oferecendo uma grande diversidade de mármores.</p>
          <ul className="flex flex-col items-start gap-9">
            <ItemSobre img={IconCozinha} text="Bancadas de cozinha" customClass="pb-9 border-b-[1px] border-opacity-gray" />
            <ItemSobre img={IconBanheiro} text="Banheiros" customClass="pb-9 border-b-[1px] border-opacity-gray" />
            <ItemSobre svg={IconMesa} text="Mesas" customClass="pb-9 border-b-[1px] border-opacity-gray" />
            <ItemSobre img={IconPiso} text="Pisos e revestimentos" />
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