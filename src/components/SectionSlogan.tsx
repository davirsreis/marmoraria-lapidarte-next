import { Buda } from "next/font/google";
import { Mako } from "next/font/google";
import { Kameron } from "next/font/google";

// const buda = Buda({
//   subsets: ["latin"],
//   weight: ['300']
// });
// const mako = Mako({
//   subsets: ["latin"],
//   weight: ['400']
// });
const kameron = Kameron({
  subsets: ["latin"],
  weight: ['400']
});
export function SectionSlogan() {
  return (
    <section className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] bg-img_bg_slogan bg-no-repeat bg-center bg-cover flex justify-center items-center pt-[60px]">
      <div className="flex justify-center items-center text-center p-4 bg-opacity-20-blue rounded-[20px]">
        <h1 className={`text-white text-[18px] sm:text-3xl md:text-5xl lg:text-6xl ${kameron.className}`}>Lapidarte, lapidando sonhos em pedra e arte</h1>
      </div>
    </section>
  )
}