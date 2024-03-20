import type { NextApiRequest, NextApiResponse } from "next";
import ColecaoProduto from "@/firebase/db/ColecaoProduto";
import axios from "axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,
) {
  try {
    const colecaoProduto = new ColecaoProduto();
    const consultaUrl = await colecaoProduto.obterUrl();

    if (!consultaUrl) {
      return res.status(400).json({ message: 'URL inválida' });
    }

    const response = await axios.get(consultaUrl);

    if (response.status === 200) {
      return res.status(200).json(response.data);
    } else {
      return res.status(response.status).json({ message: 'Falha ao obter o arquivo JSON' });
    }
  } catch (error) {
    return res.status(500).json({ message: 'Erro ao consultar o arquivo JSON' });
  }
}
