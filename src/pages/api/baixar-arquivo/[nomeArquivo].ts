import { NextApiRequest, NextApiResponse } from 'next';
import { storage } from '@/firebase/config';

export default async function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  const { nomeArquivo } = req.query;

  if (!nomeArquivo) return;
  const fileRef = storage.ref(`arquivos/${nomeArquivo.toString()}.zip`);

  try {
    const metadata = await fileRef.getMetadata();
    if (!metadata) {
      return res.status(404).send('Arquivo não encontrado.');
    }
    const url = await fileRef.getDownloadURL();
    res.status(302).redirect(url);
  } catch (error) {
    console.error('Erro ao buscar o arquivo:', error);
    res.status(500).send('Erro ao buscar o arquivo.');
  }
}
