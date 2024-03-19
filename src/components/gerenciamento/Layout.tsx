interface LayoutProps {
  children: any
  className?: string
}

export default function Layout(props: LayoutProps) {
  return (
    <div className={`
      flex flex-col bg-primary-blue border border-primary-blue sm:rounded-xl
      ${props.className}
    `}>
      {props.children}
    </div>
  )
}