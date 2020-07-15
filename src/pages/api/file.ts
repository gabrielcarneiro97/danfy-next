import { NextApiRequest, NextApiResponse } from 'next';

import multer from 'multer';

import runMiddleware from 'services/middlewere';
import conversor from 'services/xml/conversor';
import danfe from 'services/xml/danfe';
import servico from 'services/xml/notaServico';

const upload = multer();

export default async (req : NextApiRequest & { file : any }, res : NextApiResponse) => {
  await runMiddleware(req, res, upload.single('file'));

  const obj = conversor(req.file);

  console.log(servico.localizador.qualCidade(obj)(obj)[0].notaServico.chave);

  res.json('Hello');
};

export const config = {
  api: {
    bodyParser: false,
  },
};
