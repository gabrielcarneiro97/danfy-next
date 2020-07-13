// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';
// or const { PrismaClient } = require('@prisma/client')

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const prisma = new PrismaClient();

  const pessoa = await prisma.pessoa.findOne({
    where: { cpfcnpj: '11009961000183' },
    include: { servicos: true },
  });
  res.statusCode = 200;
  res.json(pessoa);
};
