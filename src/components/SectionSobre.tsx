import { ItemSobre } from "./ItemSobre";
import LogoLapidarte from '@/assets/logoLapidarte.png'
import imgMesaMarmore from '@/assets/mesaMarmore.jpg'
import IconCozinha from '@/assets/iconCozinha.png'
import IconBanheiro from '@/assets/iconBanheiro.png'
import IconPiso from '@/assets/iconPiso.png'
import Image from "next/image";

const IconMesa = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="black" d="m6.73 19.02l1.347-3.347q.129-.286.388-.47q.26-.184.577-.184H11.5v-4.813q-3.421-.068-5.74-.856q-2.318-.788-2.318-1.85q0-1.142 2.483-1.927Q8.408 4.788 12 4.788q3.598 0 6.078.785q2.48.785 2.48 1.927q0 1.08-2.328 1.86q-2.328.778-5.73.846v4.813h2.458q.311 0 .574.184q.262.184.391.47l1.346 3.346h-1.038l-1.2-3H8.969l-1.2 3zM12 9.211q2.694 0 4.854-.502t2.64-1.21q-.48-.708-2.64-1.21T12 5.788q-2.694 0-4.854.502T4.506 7.5q.48.708 2.64 1.21T12 9.212M12 7.5" /></svg>

export function SectionSobre() {
  return (
    <section className="w-full flex flex-col bg-third-neutral py-[100px]">
      <div className="flex flex-col items-center pb-20">
        <Image
          src={LogoLapidarte}
          alt="Logo Lapidarte"
          className="w-[120px] h-[120px]"
        />
        <h1 className="text-[32px]">
          Marmoraria Lapidarte
        </h1>
        <p>Brasília-DF</p>
      </div>
      {/* <Container customClass="justify-evenly"> */}
      <div className="flex flex-col lgPlus:flex-row lgPlus:justify-evenly items-center w-full mx-auto">
        <div className="w-[564px]">
          <h2 className="text-primary-gray text-[48px] font-bold leading-tight mb-6">Melhores soluções para o seu projeto</h2>
          <p className="mb-16 text-second-gray">Atendimento e serviço especializado, oferecendo uma grande diversidade de mármores.</p>
          <ul className="flex flex-col items-start gap-9">
            <ItemSobre img={IconCozinha} text="Bancadas de cozinha" customClass="pb-9 border-b-[1px] border-opacity-gray" />
            <ItemSobre img={IconBanheiro} text="Banheiros" customClass="pb-9 border-b-[1px] border-opacity-gray" />
            <ItemSobre svg={IconMesa} text="Mesas" customClass="pb-9 border-b-[1px] border-opacity-gray" />
            <ItemSobre img={IconPiso} text="Pisos e revestimentos" />
          </ul>
        </div>
        <div className="mt-20 lgPlus:mt-0">
          <Image
            src={imgMesaMarmore}
            alt="Imagem mesa de mármore"
            className="max-w-[555px] max-h-[500px] w-[555px] h-[500px] rounded-[10px]"
          />
        </div>
      </div>
      {/* </Container> */}
    </section>
  )
}