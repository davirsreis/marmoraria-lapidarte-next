import { SectionProdutos } from "@/components/homePage/SectionProdutos";
import { SectionContato } from "@/components/homePage/SectionContato";
import { SectionSlogan } from "@/components/homePage/SectionSlogan";
import { SectionSobre } from "@/components/homePage/SectionSobre";

export default function Home() {
  return (
    <>
    <SectionSlogan />
    <SectionSobre />
    <SectionProdutos />
    <SectionContato />
  </>
  );
}
