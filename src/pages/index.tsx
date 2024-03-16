import { SectionSlogan } from "@/components/SectionSlogan";
import { SectionSobre } from "@/components/SectionSobre";
import { SectionProdutos } from "@/components/SectionProdutos";
import { SectionContato } from "@/components/SectionContato";
import { FooterButton } from "@/components/FooterButton";

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
