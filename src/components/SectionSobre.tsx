import { Container } from "./Container";
import { ItemSobre } from "./ItemSobre";

import imgMesaMarmore from '@/assets/mesaMarmore.jpg'
import IconCozinha from '@/assets/iconCozinha.png'
import IconBanheiro from '@/assets/iconBanheiro.png'
import IconPiso from '@/assets/iconPiso.png'
import Image from "next/image";

const IconMesa = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="black" d="m6.73 19.02l1.347-3.347q.129-.286.388-.47q.26-.184.577-.184H11.5v-4.813q-3.421-.068-5.74-.856q-2.318-.788-2.318-1.85q0-1.142 2.483-1.927Q8.408 4.788 12 4.788q3.598 0 6.078.785q2.48.785 2.48 1.927q0 1.08-2.328 1.86q-2.328.778-5.73.846v4.813h2.458q.311 0 .574.184q.262.184.391.47l1.346 3.346h-1.038l-1.2-3H8.969l-1.2 3zM12 9.211q2.694 0 4.854-.502t2.64-1.21q-.48-.708-2.64-1.21T12 5.788q-2.694 0-4.854.502T4.506 7.5q.48.708 2.64 1.21T12 9.212M12 7.5" /></svg>

export function SectionSobre() {
  return (
    <section className="w-full h-[1031px] flex items-center bg-third-neutral">
      <Container>
        <div className="flex-1 max-w-[564px] pt-32">
          <span className="block text-primary-orange text-sm font-bold uppercase mb-9">serviços exclusivos</span>
          <h2 className="text-primary-gray text-[48px] font-bold leading-tight mb-6">Melhores soluções para o seu projeto</h2>
          <p className="max-w-[564px] mb-16 text-second-gray">Atendimento e serviço especializado, oferecendo uma grande diversidade de mármores.</p>
          <ul className="flex flex-col items-start gap-9">
            <ItemSobre img={IconCozinha} text="Bancadas de cozinha" customClass="pb-9 border-b-[1px] border-opacity-gray" />
            <ItemSobre img={IconBanheiro} text="Banheiros" customClass="pb-9 border-b-[1px] border-opacity-gray" />
            <ItemSobre svg={IconMesa} text="Mesas" customClass="pb-9 border-b-[1px] border-opacity-gray" />
            <ItemSobre img={IconPiso} text="Pisos e revestimentos" />
          </ul>
        </div>
      </Container>
      <div className="w-[555px] h-[500px] rounded-[10px] cover">
        <Image
          src={imgMesaMarmore}
          alt="Imagem mesa de mármore" />
      </div>
    </section>
  )
}