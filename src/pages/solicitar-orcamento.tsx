import { formatarTelefone, whatsAppSubmitForm } from "@/Auxiliares/functions";
import { EntradaForm } from "@/components/EntradaForm";
import { fontePrincipal } from "@/Auxiliares/fontes";
import { Botao } from "@/components/Botao";
import { useState } from "react";

export default function Orcamento() {
  const [numeroTelefone, setNumeroTelefone] = useState('');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [descricao, setDescricao] = useState('');
  const [erroFormulario, setErroFormulario] = useState<string | null>(null);
  const [arquivo, setArquivo] = useState('');

  const handleChangeTelefone = (event: any) => {
    const valorDigitado = event.target.value;
    const numeroFormatado = formatarTelefone(valorDigitado);
    setNumeroTelefone(numeroFormatado);
  };

  function validarFormulario(): boolean {
    if (!nome || !email || !descricao) {
      exibirErro('Por favor, preencha todos os campos obrigatórios.');
      return false;
    }
    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailValido) {
      exibirErro('Por favor, insira um e-mail válido.');
      return false;
    }
    return true;
  }

  function exibirErro(msg: string | null, tempo = 5) {
    setErroFormulario(msg);
    if (msg !== null) {
      setTimeout(() => setErroFormulario(null), tempo * 1000);
    }
  }

  function enviarMensagem() {
    if (validarFormulario()) {
      setErroFormulario('');
      whatsAppSubmitForm(nome, numeroTelefone, email, descricao);
    }
  }

  return (
    <section className=" pt-[100px] smless:pt-[110px] sm:pt-[120px] pb-[40px] smless:pb-[50px] sm:pb-[60px]" style={{ minHeight: 'calc(100vh - 0px - 60px)' }}>
      <h2 className={`text-[28px] smLess:text-[32px] sm:text-[44px] font-semibold text-center pb-[40px] smLess:pb-[60px] sm:pb-[80px] ${fontePrincipal}`}>Solicitação de orçamento</h2>
      <div className="flex flex-col justify-center items-center">
        <div className={`${!erroFormulario ? 'min-h-[24px]' : ''}`}>
          {erroFormulario && (
            <div className={`w-[350px] smLess:w-[400px] sm:w-[600px]`}>
              <span className="text-red-500 text-sm sm:text-base">{erroFormulario}</span>
            </div>
          )}
        </div>
        <form className="flex flex-col justify-center items-center gap-4 pb-8" onSubmit={(e) => e.preventDefault()}>
          <EntradaForm texto={'Nome'} required valor={nome} valorMudou={setNome} tipo="text" placeholder="Digite o seu nome" />
          <EntradaForm texto={'Número'} valor={numeroTelefone} valorMudou={setNumeroTelefone} tipo="tel" placeholder="Digite o seu número para contato" onChange={handleChangeTelefone} />
          <EntradaForm texto={'E-mail'} required valor={email} valorMudou={setEmail} tipo="email" placeholder="Digite o seu e-mail" />
          <EntradaForm texto={'Descrição do orçamento'} required valor={descricao} valorMudou={setDescricao} textarea customClass="h-[160px]" placeholder="Descreva os produtos interessados" />
          <div className="flex flex-col justify-center items-center text-justify">
            <div className="w-[350px] smLess:w-[400px] sm:w-[600px]">
              <p className="text-[16px] pb-4">Ao enviar o formulário, você será redirecionado para o whatsapp para iniciar uma conversa com um de nossos consultores.</p>
              <span className={`text-[20px] text-center font-semibold`}>Envio de arquivos do projeto</span>
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
      </div>
      <div className="flex flex-col justify-center items-center">
        <Botao customClass="w-[350px] smLess:w-[400px] sm:w-[600px] font-semibold my-4 p-2 sm:p-4" onClick={() => enviarMensagem()} cor="azul">Solicitar orçamento</Botao>
      </div>
    </section>
  );
}