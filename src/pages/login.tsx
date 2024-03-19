import { useEffect, useState } from "react"
import { auth, loginComEmailESenha } from '../firebase/autentication'
import { useRouter } from "next/router";
import { IconeAtencao } from "@/components/icons";
import AuthInput from "@/components/auth/AuthInput";
import LogoLapidarte from '@/assets/logoLapidarte2.png'
import Image from "next/image";
import { Botao } from "@/components/Botao";
import { fontePrincipal } from "@/Auxiliares/fontes";

export default function Login() {

  const [erro, setErro] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function exibirErro(msg: string | null, tempo = 5) {
    setErro(msg);
    if (msg !== null) {
      setTimeout(() => setErro(null), tempo * 1000);
    }
  }

  async function submeter() {
    try {
      await loginComEmailESenha(email, senha);
    } catch (e) {
      exibirErro('Ocorreu um erro de autenticação');
    }
  }

  const router = useRouter();

  useEffect(() => {
    auth.onAuthStateChanged((user: any) => {
      if (user) {
        router.push("/gerenciamento")
      } else {
        console.log('User is signed out');
      }
    });
  }, [router])

  return (
    <div className={`flex flex-col h-screen items-center justify-center`}>
      <div className="h-[100px] w-[100px]  sm:h-[120px] sm:w-[120px]">
        <Image
          src={LogoLapidarte}
          alt="Logo Lapidarte"
        />
      </div>
      <div className={`m-10 w-[350px]`}>
        <h1 className={`text-3xl font-bold mb-5 ${fontePrincipal}`}>
          Entre com a sua conta
        </h1>

        <AuthInput
          label="Email"
          tipo="email"
          valor={email}
          valorMudou={setEmail}
          obrigatorio
        />
        <AuthInput
          label="Senha"
          tipo="password"
          valor={senha}
          valorMudou={setSenha}
          obrigatorio
        />

        <div className={`${!erro ? 'min-h-[50px] my-2' : ''}`}>
          {erro && (
            <div className={`
              flex items-center
              bg-red-400 text-white py-3 px-5 my-2
              border border-red-700 rounded-lg
            `}>
              {IconeAtencao()}
              <span className={`ml-3`}>{erro}</span>
            </div>
          )}
        </div>

        <Botao cor="azul" onClick={submeter} customClass="w-full my-2 p-2">
          Entrar
        </Botao>
      </div>
    </div>
  )
}