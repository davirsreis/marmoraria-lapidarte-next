import { fontePrincipal } from "@/Auxiliares/fontes";
import { Botao } from "../Botao";

import Link from "next/link";

export function SectionContato() {
  return (
    <section className="w-full bg-img_bg_fundo_contato bg-no-repeat bg-center bg-cover flex justify-center items-center py-[80px] smLess:py-[100px] sm:py-[120px]">
      <div className="flex flex-col lgPlus:flex-row justify-evenly gap-12 smLess:gap-14 sm:gap-20">
        <div className="w-[350px] smLess:w-[400px] sm:w-[564px]">
          <h1 className={`text-[24px] smLess:text-[28px] sm:text-[38px] text-primary-blue font-semibold mb-4 text-center bg-opacity-60-neutral rounded-[10px] ${fontePrincipal}`}>Fale com nossos consultores</h1>
          <p className={`text-base smLess:text-[18px] sm:text-[20px] text-white leading-relaxed font-bold text-justify ${fontePrincipal}`}>Estamos à disposição para ajudar. Entre em contato conosco através do número/e-mail ou preencha nosso formulário para obter um orçamento personalizado para o seu projeto.</p>
          <div className="flex justify-center items-center pt-[30px] smLess:pt-[40px] sm:pt-[70px]">
            <Link href={"solicitar-orcamento"} passHref>
              <Botao
                cor="azul"
                customClass="w-[250px] smLess:w-[300px] sm:w-[350px] p-2 sm:p-4">
                SOLICITAR ORÇAMENTO
              </Botao>
            </Link>
          </div>
        </div>
        <div className="w-[350px] smLess:w-[400px] sm:w-[564px] flex flex-col items-center justify-center gap-3 smLess:gap-4 sm:gap-5">
          <span className={`text-xl sm:text-2xl text-white ${fontePrincipal}`}>Entre em contato!</span>
          <div className="w-[350px] smLess:w-[400px] sm:w-[500px] flex justify-center items-center gap-2 sm:gap-4">
            <div className="w-6 h-6 smLess:w-8 smLess:h-8 sm:w-9 sm:h-9">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#1faf38" d="M19.05 4.91A9.816 9.816 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.264 8.264 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.183 8.183 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07c0 1.22.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28" /></svg>
            </div>
            <p className={`text-lg smLess:text-xl sm:text-2xl text-white font-semibold text-center ${fontePrincipal}`}>(61) 99648-6478</p>
          </div>
          <div className="w-[300px] border-b-[1px] border-opacity-60-neutral"></div>
          <div className="w-[350px] smLess:w-[400px] sm:w-[500px] flex justify-center items-center gap-2 sm:gap-4">
            <div className="w-6 h-6 smLess:w-8 smLess:h-8 sm:w-9 sm:h-9">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#C5221F" d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2zm-2 0l-8 5l-8-5zm0 12H4V8l8 5l8-5z" /></svg>
            </div>
            <p className={`text-lg smLess:text-xl sm:text-2xl text-white font-semibold text-center ${fontePrincipal}`}>lapidartecontato@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  )
}
