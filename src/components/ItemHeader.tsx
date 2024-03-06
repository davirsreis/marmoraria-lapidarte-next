import Link from "next/link"

interface ItemHeaderProps {
  name: string
  url: string
}

export function ItemHeader(props: ItemHeaderProps) {
  return (
    <Link href={props.url} passHref>
      <span className="text-primary-blue text-xl hover:text-second-blue">{props.name}</span>
    </Link>
  )
}