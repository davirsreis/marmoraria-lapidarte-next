import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Gerenciamento from "./gerenciamento";
import ProtectedRouteGuard from "@/components/ProtectedRouteGuard";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  if (router.pathname === '/gerenciamento') {

    return <ProtectedRouteGuard>
      <Gerenciamento {...pageProps} />
    </ProtectedRouteGuard>;
  }

  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
