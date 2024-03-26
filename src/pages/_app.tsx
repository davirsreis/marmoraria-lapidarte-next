import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ProdutoProvider } from "../components/context/ProdutoContext";
import ProtectedRouteGuard from "@/components/ProtectedRouteGuard";
import { FooterButton } from "@/components/FooterButton";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import Gerenciamento from "./gerenciamento";
import { useRouter } from "next/router";
import Login from "./login";
import Head from "next/head";
import { linkLogo } from "@/Auxiliares/Valores";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const nomePagina = "Marmoraria Lapidarte";

  let title = nomePagina;
  if (router.pathname === '/gerenciamento') {
    title = "Gerenciamento - " + nomePagina;
  } else if (router.pathname === '/login') {
    title = "Login - " + nomePagina;
  } else if (router.pathname === '/produtos') {
    title = "Produtos - " + nomePagina;
  }
  else if (router.pathname === '/solicitar-orcamento') {
    title = "Orçamento - " + nomePagina;
  }

  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" type="image/png" href={linkLogo} />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css" />
      </Head>
      {router.pathname === '/gerenciamento' && (
        <ProtectedRouteGuard>
          <Gerenciamento {...pageProps} />
        </ProtectedRouteGuard>
      )}
      {router.pathname === '/login' && (
        <Login {...pageProps} />
      )}
      {(router.pathname !== '/gerenciamento' && router.pathname !== '/login') && (
        <ProdutoProvider>
          <Header />
          <Component {...pageProps} />
          <Footer />
          <FooterButton />
        </ProdutoProvider>
      )}
    </div>
  );
}
