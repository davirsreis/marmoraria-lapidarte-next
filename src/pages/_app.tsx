import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
// import Gerenciamento from "./gerenciamento";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  // Defina rotas manuais aqui
  // if (router.pathname === '/gerenciamento') {
  //   return <Gerenciamento {...pageProps} />;
  // }
  
  return <>
    <Header />
    <Component {...pageProps} />
    <Footer />
  </>;
}
