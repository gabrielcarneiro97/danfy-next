import { NextApiRequest, NextApiResponse } from 'next';

import multer from 'multer';

import runMiddleware from 'services/middlewere';
import conversor from 'services/xml/conversor';

const upload = multer();

export default async (req : NextApiRequest & { file : any }, res : NextApiResponse) => {
  await runMiddleware(req, res, upload.single('file'));

  console.log(conversor(req.file));

  res.json('Hello');
};

export const config = {
  api: {
    bodyParser: false,
  },
};
