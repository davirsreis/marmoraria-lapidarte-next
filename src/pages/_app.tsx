import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Gerenciamento from "./gerenciamento";
import ProtectedRouteGuard from "@/components/ProtectedRouteGuard";

import { ProdutoProvider } from "../components/context/ProdutoContext";
import Login from "./login";

import { Kameron } from "next/font/google";
import { FooterButton } from "@/components/FooterButton";

const kameron = Kameron({
  subsets: ["latin"],
  weight: ['400']
});
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
