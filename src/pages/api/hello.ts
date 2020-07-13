import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';
import { stringToDate } from '../../../services/date';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const prisma = new PrismaClient();

  const servicos = await prisma.servico.findMany({
    where: {
      donoCpfcnpj: '11009961000183',
      dataHora: undefined,
    },
  });

  res.json(servicos);
};
