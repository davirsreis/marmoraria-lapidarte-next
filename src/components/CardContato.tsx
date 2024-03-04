interface CardContatoProps {
  children?: any
}

export function CardContato(props: CardContatoProps) {
  return (
    <div className="text-white">
      {props.children}
    </div>
  )
}