import { whatsAppSubmit } from "@/Auxiliares/functions";
import { logout } from "@/firebase/autentication";
import { ItemHeader } from "./ItemHeader";
import LogoLapidarte2 from '@/assets/logoLapidarte2.png'
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { useWindowSize } from "@/hooks/useWindowSize";

interface HeaderProps {
  logado?: boolean
}

export function Header(props: HeaderProps) {
  const [showOptions, setShowOptions] = useState(false);
  const [hideElement, setHideElement] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const windowSize = useWindowSize();

  useEffect(() => {
    if (windowSize.width < 640) {
      setHideElement(true);
    } else {
      setHideElement(false);
    }
  }, [windowSize]);

  function enviarMensagem() {
    whatsAppSubmit("Olá. Gostaria de saber mais sobre os produtos da Marmoraria Lapidarte!");
  }

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowOptions(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);
  const styleIcon = 'h-5 w-5 sm:h-7 sm:w-7';

  return (
    <header className="w-full h-16 sm:h-20 bg-primary-neutral flex items-center justify-evenly sm:px-6 fixed z-50" style={{ backdropFilter: 'blur(10px)', backgroundColor: 'rgba(255, 236, 209, 0.6)' }}>
      <div className="min-w-[28px] min-h-[28px] w-[28px] h-[28px] smLess:min-w-[40px] smLess:min-h-[40px] smLess:w-[40px] smLess:h-[40px]  sm:min-w-[54px] sm:min-h-[54px] sm:w-[54px] sm:h-[54px]">
        <Link href="/" passHref>
          <Image
            src={LogoLapidarte2}
            alt="Logo Lapidarte"
          />
        </Link>
      </div>
      <div className="flex items-center gap-2 sm:gap-4 lg:gap-16">
        {!hideElement && <ItemHeader name="HOME" url="/" />}
        <div className="flex items-center">
          <ItemHeader name="PRODUTOS" url="/produtos" />
          <div ref={menuRef} className="relative flex items-center">
            <button onClick={toggleOptions}>
              <div className={'h-5 w-5 hover:bg-opacity-10-blue rounded-full'}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#001524" d="m12 15l-5-5h10z" /></svg>
              </div>
            </button>
            {showOptions && (
              <div className="absolute top-full left-0 mt-1 bg-white border border-gray-200 divide-y divide-gray-200 rounded-md shadow-lg z-10">
                <div className="py-1">
                  <Link href={'/marmores'} passHref><span className="block px-4 py-2 text-sm sm:text-base text-gray-700 hover:bg-gray-100">Mármores</span></Link>
                  <Link href={'/granitos'} passHref><span className="block px-4 py-2 text-sm sm:text-base text-gray-700 hover:bg-gray-100">Granitos</span></Link>
                  <Link href={'/quartzos'} passHref><span className="block px-4 py-2 text-sm sm:text-base text-gray-700 hover:bg-gray-100">Quartzos</span></Link>
                  <Link href={'/nobilestone'} passHref><span className="block px-4 py-2 text-sm sm:text-base text-gray-700 hover:bg-gray-100">NobileStone</span></Link>

                </div>
              </div>
            )}
          </div>

        </div>

        <ItemHeader name="ORÇAMENTO" url="/solicitar-orcamento" />
      </div>
      <div className="flex gap-1 sm:gap-2">

        {props.logado ? <button onClick={logout}>
          <div className={styleIcon}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#001524" d="m17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4z" /></svg>
          </div>
        </button>
          : <>
            <div className={styleIcon}>
              <a href="https://www.instagram.com/" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#001524" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3" /></svg>
              </a>
            </div>
            <div className={styleIcon}>
              <a href="https://www.facebook.com/" target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#001524" d="M20.9 2H3.1A1.1 1.1 0 0 0 2 3.1v17.8A1.1 1.1 0 0 0 3.1 22h9.58v-7.75h-2.6v-3h2.6V9a3.64 3.64 0 0 1 3.88-4a20.26 20.26 0 0 1 2.33.12v2.7H17.3c-1.26 0-1.5.6-1.5 1.47v1.93h3l-.39 3H15.8V22h5.1a1.1 1.1 0 0 0 1.1-1.1V3.1A1.1 1.1 0 0 0 20.9 2" /></svg>
              </a>
            </div>
            <button onClick={enviarMensagem}>
              <div className={styleIcon}>
                <a href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#001524" d="M19.05 4.91A9.816 9.816 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.264 8.264 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.183 8.183 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07c0 1.22.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28" /></svg>
                </a>
              </div>
            </button>
          </>
        }
      </div>
    </header>
  );
}
