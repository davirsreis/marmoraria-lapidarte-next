import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import ColecaoProduto from "@/firebase/db/ColecaoProduto";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,
) {
  try {
    const colecaoProduto = new ColecaoProduto();
    colecaoProduto.obterUrl().then(async (consultaUrl) => {
      if (consultaUrl) {
        try {
          const response = await axios.get(consultaUrl);
          if (response.status === 200) {
            res.status(200).json(response.data);
          } else {
            res.status(response.status).json({ message: 'Falha ao obter o arquivo JSON' });
          }
        } catch (error) {
          console.error('Erro ao obter o arquivo JSON:', error);
          res.status(500).json({ message: 'Erro ao obter o arquivo JSON' });
        }
      } else {
        console.error('URL inválida:', consultaUrl);
        res.status(400).json({ message: 'URL inválida' });
      }
    }).catch((error) => {
      console.error('Erro ao obter a URL:', error);
      res.status(500).json({ message: 'Erro ao obter a URL' });
    });
  } catch (error) {
    console.error('Erro ao criar a instância de ColecaoProduto:', error);
    res.status(500).json({ message: 'Erro ao criar a instância de ColecaoProduto' });
  }
}
