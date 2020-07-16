import { PrismaClient } from '@prisma/client';

export type Query = (parent : any, args : any, context : { prisma : PrismaClient }) => any;

export const nota : Query = async (_, args, { prisma }) => {
  const { chave } = args;

  return prisma.nota.findOne({
    where: {
      chave,
    },
    include: {
      destinatario: true,
      emitente: true,
      estadoDestino: true,
      estadoGerador: true,
      produtos: true,
    },
  });
};

export const notaServico : Query = async (_, args, { prisma }) => {
  const { chave } = args;

  return prisma.notaServico.findOne({
    where: {
      chave,
    },
    include: {
      destinatario: true,
      emitente: true,
      retencao: true,
    },
  });
};
