import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import ColecaoProduto from "@/firebase/db/ColecaoProduto";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,
) {
  try {
    console.log("Entrando na rota /api/consultarProdutos");

    const colecaoProduto = new ColecaoProduto();
    const consultaUrl = await colecaoProduto.obterUrl();

    if (!consultaUrl) {
      console.error('URL inválida:', consultaUrl);
      return res.status(400).json({ message: 'URL inválida' });
    }

    const response = await axios.get(consultaUrl);

    if (response.status === 200) {
      return res.status(200).json(response.data);
    } else {
      console.log("Falha ao obter o arquivo JSON. Status:", response.status);
      return res.status(response.status).json({ message: 'Falha ao obter o arquivo JSON' });
    }
  } catch (error) {
    console.error('Erro ao consultar o arquivo JSON:', error);
    return res.status(500).json({ message: 'Erro ao consultar o arquivo JSON' });
  }
}
