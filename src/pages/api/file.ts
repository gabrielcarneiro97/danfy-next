import { NextApiRequest, NextApiResponse } from 'next';

import multer from 'multer';

import runMiddleware from 'services/middlewere';
import conversor from 'services/xml/conversor';
import * as danfe from 'services/xml/danfe';
import servico from 'services/xml/notaServico';

import { upsertNotaPessoas } from 'prisma/services/nota';

const upload = multer();

export default async (req : NextApiRequest & { file : any }, res : NextApiResponse) => {
  await runMiddleware(req, res, upload.single('file'));

  const obj = conversor(req.file);

  if (danfe.eDanfe(obj)) {
    const notaPessoas = danfe.leitor(obj);

    console.log('início: ', new Date().toLocaleString());
    const teste = await upsertNotaPessoas(notaPessoas);
    console.log('fim: ', new Date().toLocaleString());

    res.json([teste]);
  }
};

export const config = {
  api: {
    bodyParser: false,
  },
};
