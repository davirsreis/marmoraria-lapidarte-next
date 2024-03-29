import Image from 'next/image';

interface ItemSobreProps {
  customClass?: string
  text: string
  img?: any
}

export function ItemSobre(props: ItemSobreProps) {
  return (
    <li className={`flex items-center gap-x-[88px] ${props.customClass}`}>
      <div className="flex items-center justify-center">
        <Image
          src={props.img}
          alt={`Ícone ${props.text}`}
          width={32}
          height={32}
        />
      </div>
      <p className="w-[220px] smLess:w-[280px] sm:w-[400px] text-black pr-2">{props.text}</p>
    </li>
  );
}