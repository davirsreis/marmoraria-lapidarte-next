import LogoLapidarte from '@/assets/logoLapidarte.png'
import Image from "next/image";

export function Slash() {
  return (
    <section className="flex flex-col justify-center items-center" style={{ minHeight: 'calc(100vh - 0px - 60px)' }}>
      <div className="min-w-[80px] min-h-[80px] w-[80px] h-[80px] smLess:min-w-[100px] smLess:min-h-[100px] smLess:w-[100px] smLess:h-[100px] sm:min-w-[120px] sm:min-h-[120px] sm:w-[120px] sm:h-[120px]">
        <Image
          src={LogoLapidarte}
          alt="Logo Lapidarte"
        />
      </div>
      <span className="text-[16px] smLess:text-[18px] sm:text-[20px] font-semibold animate-pulse">Carregando conteúdo...</span>
    </section>
  )
}
