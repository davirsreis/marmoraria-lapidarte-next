interface ContainerProps {
  customClass?: string
  children?: any
}

export function Container(props: ContainerProps) {
  return (
    <div className={`flex items-center w-full mx-auto ${props.customClass}`}>
      {props.children}
    </div>
  )
}