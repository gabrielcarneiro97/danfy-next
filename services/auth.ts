import { getSession } from 'next-auth/client';
import { ParsedUrlQuery } from 'querystring';
import { GetServerSidePropsContext } from 'next';

export type Session = {
  user?: {
    name?: string,
    email?: string,
    image?: string
  },
  accessToken?: string,
  expires?: string
}

export async function isAuth(
  context : GetServerSidePropsContext<ParsedUrlQuery>,
) : Promise<Session | null> {
  console.log(getSession);
  return getSession(context);
}
