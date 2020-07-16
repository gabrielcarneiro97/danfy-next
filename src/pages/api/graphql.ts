import { ApolloServer } from 'apollo-server-micro';
import * as fs from 'fs';
import { PrismaClient } from '@prisma/client';

import resolvers from 'graphql/resolvers';

const typeDefs = fs.readFileSync('graphql/typeDefs.gql', 'utf8');

const prisma = new PrismaClient();

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: (context) => ({ ...context, prisma }),
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default apolloServer.createHandler({ path: '/api/graphql' });
