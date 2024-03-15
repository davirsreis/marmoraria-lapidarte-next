import { useContext, useEffect, useState } from "react"
import { auth, registrarComEmailESenha } from '../firebase/autentication'
import { userContext } from "@/components/context/appContext";
import { useRouter } from "next/router";
import firebase from '../firebase/config';

export default function home() {
  // const { authUser, setAuth } = useContext(userContext);

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const router = useRouter();
  const auth = firebase.auth();
  useEffect(() => {
    auth.onAuthStateChanged((user: any) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/v8/firebase.User
        var uid = user.uid;
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
  }, [])

  return (
    <section className="bg-gray-300 w-full h-screen">
      <div className="flex flex-col justify-center items-center">
        <h1>Cadastrar</h1>
        <label>Email</label>
        <input type="text" onChange={(e) => { setEmail(e.target.value) }} />
        <label>Senha</label>
        <input type="password" onChange={(e) => { setSenha(e.target.value) }} />
        <div>
          <button onClick={(e) => { registrarComEmailESenha(email, senha) }}>Cadastrar</button>
        </div>
      </div>
    </section>
  )
}