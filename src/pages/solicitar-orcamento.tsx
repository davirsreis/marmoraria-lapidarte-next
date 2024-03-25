import { formatarTelefone, whatsAppSubmitForm } from "@/Auxiliares/functions";
import { EntradaForm } from "@/components/orcamento/EntradaForm";
import { fontePrincipal } from "@/Auxiliares/fontes";
import { Botao } from "@/components/Botao";
import { useEffect, useState } from "react";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "@/firebase/config";
import JSZip from 'jszip';
import ReCAPTCHA from "react-google-recaptcha";

export default function Orcamento() {
  const [numeroTelefone, setNumeroTelefone] = useState('');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [descricao, setDescricao] = useState('');
  const [erroFormulario, setErroFormulario] = useState<string | null>(null);
  const [arquivos, setArquivos] = useState<File[]>([]);
  const [progressPorcent, setPorgessPorcent] = useState(0);
  const [captchaResolved, setCaptchaResolved] = useState(false);
  const [mensagemSucess, setMensagemSucess] = useState<string[]>(['', '']);

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_PRODUCTION_MODE == 'dev') { setCaptchaResolved(true) };
  }, [])

  function handleCaptchaChange(value: any) {
    setCaptchaResolved(!!value);
  }

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

  async function compactarArquivos(files: any) {
    const zip = new JSZip();
    files.forEach((file: any) => {
      zip.file(file.name, file);
    });
    const conteudoZip = await zip.generateAsync({ type: 'blob' });
    return conteudoZip;
  }

  async function encurtarURL(urlOriginal: string) {
    const apiUrl = 'https://api.tinyurl.com/create';
    const apiKey = process.env.NEXT_PUBLIC_TINYURL_API_KEY;

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          url: urlOriginal,
          domain: 'tinyurl.com'
        })
      });

      if (!response.ok) {
        throw new Error('Erro ao encurtar URL');
      }

      const data = await response.json();
      return data.data.tiny_url;
    } catch (error) {
      console.error('Erro ao encurtar URL:', error);
      throw error;
    }
  }

  async function enviarArquivosParaFirebase(arquivos: File[]) {
    const arquivoCompactado = await compactarArquivos(arquivos);
    const storageRef = ref(storage, `arquivos/${nome}/arquivo.zip`);
    const uploadTask = uploadBytesResumable(storageRef, arquivoCompactado);
    return new Promise<string>((resolve, reject) => {
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          console.log(`Progresso do upload do arquivo compactado: ${progress}%`);
          setPorgessPorcent(progress);
        },
        (error) => {
          console.error(`Erro ao enviar o arquivo compactado:`, error);
          alert(`Erro ao enviar o arquivo compactado: ${error.message}`);
          reject(error);
        },
        () => {
          console.log(`Arquivo compactado enviado com sucesso!`);
          getDownloadURL(uploadTask.snapshot.ref)
            .then(async (downloadURL) => {
              console.log(`URL de download do arquivo compactado (Esta aqui):`, downloadURL);
              resolve(downloadURL);
            })
            .catch((error) => {
              console.error(`Erro ao obter a URL de download do arquivo compactado:`, error);
              reject(error);
            });
        }
      );
    });
  }

  async function enviarMensagem() {
    if (!captchaResolved) {
      setMensagemSucess(['Por favor, complete o reCAPTCHA.', 'danger']);
      return;
    }
    if (validarFormulario()) {
      setErroFormulario('');
      let urlArquivo: string | undefined;

      try {
        if (arquivos.length > 0) {
          if (arquivos.some(file => !['.zip', '.rar'].includes(file.name.slice(-4).toLowerCase()))) {
            const urlParaEncurtar = await enviarArquivosParaFirebase(arquivos);
            // urlArquivo = await encurtarURL(urlParaEncurtar);
            urlArquivo = urlParaEncurtar;
          } else {
            await Promise.all(arquivos.map(async (file) => {
              const storageRef = ref(storage, `arquivos/${nome}/${file.name}`);
              const uploadTask = uploadBytesResumable(storageRef, file);

              await new Promise<void>((resolve, reject) => {
                uploadTask.on(
                  "state_changed",
                  (snapshot) => {
                    const progress = Math.round(
                      (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                    );
                    console.log(`Progresso do upload do arquivo ${file.name}: ${progress}%`);
                    setPorgessPorcent(progress);
                  },
                  (error) => {
                    console.error(`Erro ao enviar o arquivo ${file.name}:`, error);
                    alert(`Erro ao enviar o arquivo ${file.name}: ${error.message}`);
                    reject(error);
                  },
                  async () => {
                    console.log(`Arquivo ${file.name} enviado com sucesso!`);
                    getDownloadURL(uploadTask.snapshot.ref)
                      .then(async (downloadURL) => {
                        console.log(`URL de download do arquivo ${file.name}:`, downloadURL);
                        urlArquivo = await encurtarURL(downloadURL);
                        resolve();
                      })
                      .catch((error) => {
                        console.error(`Erro ao obter a URL de download do arquivo ${file.name}:`, error);
                        reject(error);
                      });
                  }
                );
              });
            }));
          }
        }
        console.log(urlArquivo);
        whatsAppSubmitForm(nome, numeroTelefone, email, descricao, urlArquivo);

        setNome('');
        setNumeroTelefone('');
        setEmail('');
        setDescricao('');
        setArquivos([]);
        setPorgessPorcent(0);
        setMensagemSucess(['Arquivo enviado com sucesso!', 'sucessnpm'])
        const fileInput = document.getElementById('fileInput') as HTMLInputElement | null;
        if (fileInput) {
          fileInput.value = '';
        }
      } catch (error: any) {
        console.error('Erro ao enviar mensagem ou arquivos:', error);
        alert(`Erro ao enviar mensagem ou arquivos: ${error.message}`);
      }
    }
  }



  function handleEnviarArquivo(event: React.ChangeEvent<HTMLInputElement>) {
    const maxSizeInBytes = 134217728; // 128 MB
    const files = event.target.files;
    const fileInput = event.target as HTMLInputElement;

    if (files && files.length > 0) {
      for (let i = 0; i < files.length; i++) {
        if (files[i].size > maxSizeInBytes) {
          alert(`O tamanho do arquivo ${files[i].name} excede o limite de 128 MB.`);
          fileInput.value = '';
          setArquivos([]);
          return;
        }
      }

      const fileList = Array.from(files);
      setArquivos(fileList);
    } else {
      console.log('Nenhum arquivo selecionado');
      setArquivos([]);
    }
  }

  function handleRemoverArquivo(index: number) {
    const newArquivos = [...arquivos];
    newArquivos.splice(index, 1);
    setArquivos(newArquivos);
  }


  return (
    <section className=" pt-[100px] smless:pt-[110px] sm:pt-[120px] pb-[40px] smless:pb-[50px] sm:pb-[60px]" style={{ minHeight: 'calc(100vh - 0px - 60px)' }}>
      <h2 className={`text-[28px] smLess:text-[32px] sm:text-[44px] font-semibold text-center pb-[20px] smLess:pb-[25px] sm:pb-[30px] ${fontePrincipal}`}>Solicitação de orçamento</h2>
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
        </form>
        <div className="flex flex-col justify-center items-center text-justify">
          <div className="w-[350px] smLess:w-[400px] sm:w-[600px]">
            <p className="text-[16px]">Ao enviar o formulário, você será redirecionado para o whatsapp para iniciar uma conversa com um de nossos consultores.</p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center text-justify">
          <div className="w-[350px] smLess:w-[400px] sm:w-[600px]">
            <span className={`text-[20px] text-center font-semibold`}>Envio de arquivos do projeto</span>
            <p className="text-[16px]">Caso tenha arquivos de projeto nos formatos PNG, JPG, PDF ou compactado (rar ou zip), faça o envio ao início da conversa ou através desse formulário.</p>
            <p>Se o formato for diferentes ou o tamanho superior, apenas preencha o formulário e encontraremos a melhor forma de envio para os arquivos</p>
          </div>
        </div>

        <div>
          <input
            id="fileInput"
            type="file"
            accept=".jpg, .jpeg, .png, .pdf, .zip, .rar"
            multiple
            onChange={(e) => handleEnviarArquivo(e)}
            className="w-[350px] smLess:w-[400px] sm:w-[600px] h-[60px] border border-opacity-gray rounded-lg focus:outline-none px-4 py-2 bg-white"
          />
        </div>
        <p className="w-[350px] smLess:w-[400px] sm:w-[600px] text-xs sm:text-base">Tipos de arquivo aceitos: jpg, png, pdf ou compactado (rar ou zip) Máx. tamanho do arquivo: 128 MB.</p>

        {progressPorcent != 0 && (
          <div>
            {progressPorcent}%
          </div>
        )}

        {arquivos.length > 0 && (
          <div className="flex flex-col justify-center items-center">
            <h3 className="text-lg font-semibold mt-4">Arquivos Selecionados:</h3>
            <ul className="mt-2">
              {arquivos.map((file, index) => (
                <li key={index} className="flex items-center">
                  <span className="mr-2">{file.name}</span>
                  <button className="text-red-600" onClick={() => handleRemoverArquivo(index)}>Remover</button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      {(process.env.NEXT_PUBLIC_PRODUCTION_MODE == 'production')
        ?
        <div className="flex justify-center items-center">
          <ReCAPTCHA
            sitekey={`${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
            onChange={handleCaptchaChange}
          />
        </div>
        : null
      }

      {!mensagemSucess &&
        <div className="flex justify-center items-center">
          {mensagemSucess[1] == 'alert'
            ? <span className="text-red-500">{mensagemSucess}</span>
            : <span className="text-green-500">{mensagemSucess}</span>
          }
        </div>}
      <div className="flex flex-col justify-center items-center">
        <Botao customClass="w-[350px] smLess:w-[400px] sm:w-[600px] font-semibold my-4 p-2 sm:p-4" onClick={() => enviarMensagem()} cor="azul">Solicitar orçamento</Botao>
      </div>
    </section>
  );
}