import { Buda } from "next/font/google";

const buda = Buda({
  subsets: ["latin"],
  weight: ['300']
});
export function SectionSlogan() {
  return (
    <section className="w-full h-[500px] md:h-[600px] lg:h-[700px] bg-img_bg_slogan bg-no-repeat bg-center bg-cover flex justify-center items-center">
      <div className="text-center p-4 bg-opacity-20-neutral rounded-[20px]">
        <h1 className={`text-black text-3xl md:text-5xl lg:text-6xl ${buda.className}`}>Lapidarte, lapidando sonhos em pedra e arte</h1>
      </div>
    </section>
  )
}