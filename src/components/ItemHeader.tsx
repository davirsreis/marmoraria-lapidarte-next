import { fontePrincipal } from "@/Auxiliares/fontes";
import Link from "next/link"
import { useRouter } from "next/router";

interface ItemHeaderProps {
  name: string
  url: string
}

export function ItemHeader(props: ItemHeaderProps) {
  const router = useRouter();
  const isActive = router.pathname === props.url;
  return (
    <Link href={props.url} passHref>
      <span className={`${fontePrincipal} text-primary-blue text-sm smLess:text-lg  sm:text-xl hover:text-second-blue relative inline-block ${isActive ? "border-b-2 border-primary-blue hover:border-second-blue" : ""}`}>{props.name}</span>
    </Link>
  )
}