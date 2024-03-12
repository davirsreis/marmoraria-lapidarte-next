import { Botao } from "@/components/Botao";
import { EntradaForm } from "@/components/EntradaForm";
import { useState } from "react";

export default function Orcamento() {
  const [numeroTelefone, setNumeroTelefone] = useState('');

  const formatarTelefone = (valor: any) => {
    // Remove qualquer caractere que não seja número
    const numeroApenasDigitos = valor.replace(/\D/g, '');
    
    // Formata o número no formato (99) 9999-9999
    const numeroFormatado = numeroApenasDigitos.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
    
    return numeroFormatado;
  };

  const handleChangeTelefone = (event: any) => {
    const valorDigitado = event.target.value;
    const numeroFormatado = formatarTelefone(valorDigitado);
    setNumeroTelefone(numeroFormatado);
  };
  
  return (
    <>
      <section className="py-[80px]">
        <h2 className="text-[44px] font-semibold text-center pb-[80px]">Solicite já o seu orçamento</h2>
        <form className="flex flex-col justify-center items-center gap-4 pb-8">
          <EntradaForm tipo="text" placeholder="Seu nome" />
          <EntradaForm tipo="tel" placeholder="Seu número" valor={numeroTelefone} onChange={handleChangeTelefone} />
          <EntradaForm tipo="email" placeholder="Seu e-mail" />
          <EntradaForm textarea customClass="h-[160px]" placeholder="Produtos desejados para orçamento" />
          <div className="flex flex-col justify-center items-center text-justify">
            <div className="w-[600px]">
              <span className="text-[20px] text-center font-semibold">Envio de arquivos do projeto</span>
              <p className="text-[16px] font-bold">Se tiver arquivos do projeto envie em alguns dos formatos: PNG, JPG, PDF ou Compactado (rar ou zip). Tamanho máximo de 128mb.</p>
              <p>Caso tenha um outro formato ou um tamanho maior de arquivo, apenas preencha o formulário que entraremos em contato para analisarmos a melhor forma de disponibilização dos arquivos do projeto.</p>
            </div>
          </div>
          <EntradaForm tipo="file" multiple customClass="bg-white" placeholder="Seu e-mail" />
          <p>Tipos de arquivo aceitos: jpg, png, pdf, zip, rar, Máx. tamanho do arquivo: 128 MB.</p>
        </form>
        <div className="flex flex-col justify-center items-center">
          <Botao customClass="w-[600px] font-semibold my-4" cor="azul">Solicitar orçamento</Botao>
        </div>
      </section>
    </>
  )
}