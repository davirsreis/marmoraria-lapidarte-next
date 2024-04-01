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
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const nomePagina = "Marmoraria Lapidarte";
  let description = "";

  let title = nomePagina;
  if (router.pathname === '/') {
    description = "Descubra na Marmoraria Lapidarte uma variedade excepcional de materiais para transformar seus projetos de design. Comece a transformar seus sonhos em realidade hoje mesmo!";
  } else if (router.pathname === '/produtos') {
    title = "Produtos - " + nomePagina;
    description = "Explore nossa coleção de mármores, granitos, quartzitos e nobilestone. Encontre a solução perfeita para o seu projeto em nossa variedade de materiais de alta qualidade.";
  } else if (router.pathname === '/solicitar-orcamento') {
    title = "Orçamento - " + nomePagina;
    description = "Contate nossos consultores na Marmoraria Lapidarte para um orçamento personalizado. Estamos aqui para ajudar. Entre em contato através do número/e-mail ou preencha nosso formulário online.";
  } else if (router.pathname === '/gerenciamento') {
    title = "Gerenciamento - " + nomePagina;
  } else if (router.pathname === '/login') {
    title = "Login - " + nomePagina;
  }

  useEffect(() => {
    const handleRouteChange = (url: any) => {
      console.log("Rota alterada para:", url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-BCVMVR92L3"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-BCVMVR92L3');
            `,
          }}
        />
        <link rel="icon" type="image/png" href={linkLogo} />
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
