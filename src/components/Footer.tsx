import Image from "next/image";
import Link from "next/link";
import React from "react";

export function Footer() {

  return (
    <footer className="w-full h-[60px] bg-white flex flex-col justify-evenly text-center sm:p-4">
      <div className="flex w-full justify-between items-center sm:px-20">
        <div className="w-[300px] flex text-center">
          <span className="text-xs sm:text-sm">Copyright © 2024 Marmoraria Lapidarte</span>
        </div>
        <Link href={'/'} passHref>
          <Image
            src={'https://firebasestorage.googleapis.com/v0/b/marmorarialapidarteofc.appspot.com/o/imagensAplicacao%2FlogoLapidarte2.png?alt=media&token=8749bcef-bc07-4ef7-91bd-b990ec8b216d'}
            alt="Logo Lapidarte"
            width={48} height={48} />
        </Link>
        <div className="w-[300px] flex flex-col">
          <div className="w-full flex items-center justify-center">
            <span className="text-xs sm:text-sm">Parte das imagens fornecidas por <a className="text-blue-500" href="https://br.freepik.com" target="_blank">Freepik</a></span>
          </div>
        </div>
      </div>

    </footer>
  );
}
