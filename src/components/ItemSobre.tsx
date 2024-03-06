import Image from 'next/image';
import { useState } from 'react';

interface ItemSobreProps {
  customClass?: string
  text: string
  img?: any
  svg?: any
}

export function ItemSobre(props: ItemSobreProps) {
  return (
    <li className={`flex items-center gap-[88px] ${props.customClass}`}>
      <div className="w-8 h-8 flex items-center justify-center">
        {props.img ? <Image
          src={props.img}
          alt="Icon phone"
        /> : props.svg}
      </div>
      <p className="w-[438px] text-black pr-2">{props.text}</p>
    </li>
  );
}