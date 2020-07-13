import { PrismaClient, NotaCreateInput } from '@prisma/client';

export async function criarNota(chave : string, notaParam : NotaCreateInput) {
  const prisma = new PrismaClient();

  const nota = await prisma.nota.create({
    data: {
      chave,
      ...notaParam,
    },
  });

  prisma.disconnect();

  return nota;
}

export async function pegarNotasEntradaEmitentePeriodo(
  cpfcnpj : string,
  periodo : { inicio : Date, fim : Date },
) {
  const prisma = new PrismaClient();

  const [emitidas, recebidas] = await Promise.all([
    prisma.nota.findMany({
      where: {
        emitenteCpfcnpj: cpfcnpj,
        tipo: '0',
        dataHora: {
          gte: periodo.inicio,
          lte: periodo.fim,
        },
      },
      include: {
        produtos: true,
      },
    }),
    prisma.nota.findMany({
      where: {
        destinatarioCpfcnpj: cpfcnpj,
        tipo: '1',
        dataHora: {
          gte: periodo.inicio,
          lte: periodo.fim,
        },
      },
      include: {
        produtos: true,
      },
    }),
  ]);

  prisma.disconnect();

  return [...emitidas, ...recebidas];
}
