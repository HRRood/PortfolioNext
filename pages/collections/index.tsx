import { sessionOptions, User } from "../../lib/session";
import { getUserByData } from "../api/auth";
import { withIronSessionSsr } from "iron-session/next";

import { InferGetServerSidePropsType } from "next";

export default function Collections({ user }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div>
      <h1>Collections</h1>
      <p>{user?.email}</p>
    </div>
  );
}

export const getServerSideProps = withIronSessionSsr(async function ({ req, res }) {
  const user = req.session.user;

  if (user === undefined) {
    res.setHeader("location", "/login");
    res.statusCode = 302;
    res.end();
    return {
      props: {
        user: {} as User,
      },
    };
  }

  const userData = await getUserByData(user);

  if (!userData || !userData.success) {
    res.setHeader("location", "/login");
    res.statusCode = 302;
    res.end();
    return {
      props: {
        user: {} as User,
      },
    };
  }

  const mappedUser = userData.data;

  return {
    props: { user: mappedUser },
  };
}, sessionOptions);
