import Image from "next/image";
import LogoLapidarte from '@/assets/logoLapidarte.png'

export function Slash() {
  return (
    <section className="flex flex-col justify-center items-center" style={{ minHeight: 'calc(100vh - 0px - 60px)' }}>
      <div className="min-w-[120px] min-h-[120px] w-[120px] h-[120px]">
        <Image
          src={LogoLapidarte}
          alt="Logo Lapidarte"
        />
      </div>
      <span className="text-[20px] font-semibold animate-pulse">Carregando conteúdo...</span>
    </section>
  )
}
