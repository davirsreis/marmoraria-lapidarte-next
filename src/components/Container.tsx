interface ContainerProps {
  children?: any
}

export function Container(props: ContainerProps) {
  return (
    <div className="flex items-center w-full mx-auto">
      {props.children}
    </div>
  )
}