import React from "react";
import { ItemHeader } from "./ItemHeader";
import LogoInstagram from '@/assets/instagram-black-icon.png'
import Image from "next/image";

export function Header() {

  return (
    <header className="w-full h-20 bg-gray-200 flex items-center justify-evenly px-6">
      <a className="text-xl">Lapidarte</a>
      <div className="flex items-center gap-4 lg:gap-16">
        <ItemHeader name="HOME" url="#" />
        <ItemHeader name="PRODUTOS" url="#" />
        <ItemHeader name="ORÇAMENTO" url="#" />
      </div>
      <div className="h-7 w-7">
        <a href="#" className="text-white">
          <Image
            src={LogoInstagram}
            alt="Logo Instagram"
          />
        </a>
      </div>
    </header>
  );
}
