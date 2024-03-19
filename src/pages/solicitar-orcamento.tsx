import { Botao } from "@/components/Botao";
import { EntradaForm } from "@/components/EntradaForm";
import { formatarTelefone, whatsAppSubmitForm } from "@/functions/Auxiliares";
import { useState } from "react";

export default function Orcamento() {
  const [numeroTelefone, setNumeroTelefone] = useState('');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [descricao, setDescricao] = useState('');
  const [arquivo, setArquivo] = useState('');

  const handleChangeTelefone = (event: any) => {
    const valorDigitado = event.target.value;
    const numeroFormatado = formatarTelefone(valorDigitado);
    setNumeroTelefone(numeroFormatado);
  };

  function enviarMensagem() {
    whatsAppSubmitForm(nome, numeroTelefone, email, descricao);
  }

  return (
    <section className=" pt-[100px] smless:pt-[110px] sm:pt-[120px] pb-[40px] smless:pb-[50px] sm:pb-[60px]" style={{ minHeight: 'calc(100vh - 0px - 60px)' }}>
      <h2 className="text-[28px] smLess:text-[32px] sm:text-[44px] font-semibold text-center pb-[40px] smLess:pb-[60px] sm:pb-[80px]">Solicite já o seu orçamento</h2>
      <form className="flex flex-col justify-center items-center gap-4 pb-8" onSubmit={(e) => e.preventDefault()}>
        <EntradaForm valor={nome} valorMudou={setNome} tipo="text" placeholder="Seu nome" />
        <EntradaForm valor={numeroTelefone} valorMudou={setNumeroTelefone} tipo="tel" placeholder="Seu número" onChange={handleChangeTelefone} />
        <EntradaForm valor={email} valorMudou={setEmail} tipo="email" placeholder="Seu e-mail" />
        <EntradaForm valor={descricao} valorMudou={setDescricao} textarea customClass="h-[160px]" placeholder="Produtos desejados para orçamento" />
        <div className="flex flex-col justify-center items-center text-justify">
          <div className="w-[350px] smLess:w-[400px] sm:w-[600px]">
            <p className="text-[16px] pb-4">Ao enviar o formulário, você será redirecionado para o whatsapp para iniciar a conversa com um de nossos consultores.</p>
            <span className="text-[20px] text-center font-semibold">Envio de arquivos do projeto</span>
            <p className="text-[16px]">Caso tenha arquivos de projeto, faça o envio ao início da conversa.</p>
          </div>
        </div>
        {/* <div className="flex flex-col justify-center items-center text-justify">
          <div className="w-[600px]">
            <span className="text-[20px] text-center font-semibold">Envio de arquivos do projeto</span>
            <p className="text-[16px] font-bold">Se tiver arquivos do projeto envie em alguns dos formatos: PNG, JPG, PDF ou Compactado (rar ou zip). Tamanho máximo de 20MB.</p>
            <p>Caso tenha um outro formato ou um tamanho maior de arquivo, apenas preencha o formulário que entraremos em contato para analisarmos a melhor forma de disponibilização dos arquivos do projeto.</p>
          </div>
        </div>
        <EntradaForm valor={arquivo} valorMudou={setArquivo} tipo="file" accept=".jpg, .jpeg, .png, .pdf, .zip, .rar" multiple customClass="bg-white" placeholder="Seu e-mail" />
        <p>Tipos de arquivo aceitos: jpg, png, pdf, zip, rar, Máx. tamanho do arquivo: 20 MB.</p> */}
      </form>
      <div className="flex flex-col justify-center items-center">
        <Botao customClass="w-[350px] smLess:w-[400px] sm:w-[600px] font-semibold my-4" onClick={() => enviarMensagem()} cor="azul">Solicitar orçamento</Botao>
      </div>
    </section>
  );
}