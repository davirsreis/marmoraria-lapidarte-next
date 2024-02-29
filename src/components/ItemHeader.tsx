interface ItemHeaderProps {
  name: string
  url: string
}

export function ItemHeader(props: ItemHeaderProps) {
  return (
    <a className="text-gray-900 hover:text-gray-600" href={props.url}>{props.name}</a>
  )
}