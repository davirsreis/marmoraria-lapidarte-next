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

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  if (router.pathname === '/gerenciamento') {

    return <ProtectedRouteGuard>
      <Gerenciamento {...pageProps} />
    </ProtectedRouteGuard>;
  }

  if (router.pathname === '/login') {
    return <Login {...pageProps} />
  }

  return (
    <div >
      <ProdutoProvider>
        <Header />
        <Component {...pageProps} />
        <Footer />
        <FooterButton />
      </ProdutoProvider>
    </div>
  );
}
