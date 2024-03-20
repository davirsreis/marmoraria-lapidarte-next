import { SectionProdutos } from "@/components/SectionProdutos";
import { SectionContato } from "@/components/SectionContato";
import { SectionSlogan } from "@/components/SectionSlogan";
import { SectionSobre } from "@/components/SectionSobre";

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
