interface CardContatoProps {
  children?: any
}

export function CardContato(props: CardContatoProps) {
  return (
    <div className="text-white shadow-lg rounded-lg h-full">
      {props.children}
    </div>
  )
}