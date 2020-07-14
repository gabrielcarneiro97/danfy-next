import React from 'react';
import { GetServerSideProps } from 'next';
import { signin, signout } from 'next-auth/client';
import { isAuth, Session } from 'services/auth';

type Props = {
  session : Session | null,
}

export default function Home({ session } : Props) {
  console.log(session);
  return (
    <div>
      {
        !session
        && <button type="button" onClick={signin}>Login</button>
      }
      {
        session
        && <button type="button" onClick={signout}>Logout</button>
      }
    </div>
  );
}

export const getServerSideProps : GetServerSideProps<Props> = async (context) => ({
  props: {
    session: await isAuth(context),
  },
});
