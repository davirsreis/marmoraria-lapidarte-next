import { consultarArquivoJSON } from "@/Auxiliares/functions";
import { useEffect, useState } from "react";
import { createContext } from "react";

export const ProdutoContext = createContext();

export const ProdutoProvider = ({ children }) => {
  const [dados, setDados] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await consultarArquivoJSON();
        setDados(result);
      } catch (error) {
        console.error("Erro ao consultar arquivo JSON:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <ProdutoContext.Provider value={dados}>
      {children}
    </ProdutoContext.Provider>
  )
}