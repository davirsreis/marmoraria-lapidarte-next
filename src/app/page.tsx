import { SectionContato } from "@/components/SectionContato";
import { SectionProdutos } from "@/components/SectionProdutos";
import { SectionSlogan } from "@/components/SectionSlogan";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <SectionSlogan />
      <SectionProdutos />
      <SectionContato />
    </>
  );
}
