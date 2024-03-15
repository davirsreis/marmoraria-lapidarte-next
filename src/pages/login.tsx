import { useEffect, useState } from "react"
import { auth, loginComEmailESenha } from '../firebase/autentication'
import { useRouter } from "next/router";

export default function Cadastro() {
  // const { authUser, setAuth } = useContext(userContext);

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const router = useRouter();

  useEffect(() => {
    auth.onAuthStateChanged((user: any) => {
      if (user) {
        var uid = user.uid;
        router.push("/gerenciamento")
      } else {
        // User is signed out
        console.log('User is signed out');
        
        // ...
      }
    });
  }, [])

  return (
    <section className="bg-gray-300 w-full h-screen">
      <div className="flex flex-col justify-center items-center">
        <h1>Logar</h1>
        <label>Email</label>
        <input type="text" onChange={(e) => { setEmail(e.target.value) }} />
        <label>Senha</label>
        <input type="password" onChange={(e) => { setSenha(e.target.value) }} />
        <div>
          <button onClick={(e) => { loginComEmailESenha(email, senha) }}>Entrar</button>
        </div>
      </div>
    </section>
  )
}