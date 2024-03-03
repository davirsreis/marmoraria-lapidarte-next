interface ItemHeaderProps {
  name: string
  url: string
}

export function ItemHeader(props: ItemHeaderProps) {
  return (
    <a className="text-primary-blue text-xl hover:text-second-blue" href={props.url}>{props.name}</a>
  )
}