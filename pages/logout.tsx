import { sessionOptions } from "../lib/session";
import { withIronSessionSsr } from "iron-session/next";

import { InferGetServerSidePropsType } from "next";
import Router from "next/router";
import { useContext, useEffect } from "react";
import { AppContext } from "../contexts/AppContext";

export default function Logout({ loggedIn }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { setUser } = useContext(AppContext);

  useEffect(() => {
    setUser(null);
  }, []);
  if (!loggedIn) {
    Router.push("/");
    return <div>Not logged in</div>;
  }

  return (
    <div>
      <p>Already Loggedin</p>
    </div>
  );
}

export const getServerSideProps = withIronSessionSsr(async function ({ req, res }) {
  const user = req.session.user;

  if (user) {
    req.session.destroy();
    res.setHeader("location", "/");
    res.statusCode = 302;
    res.end();
    return {
      props: {
        loggedIn: true,
      },
    };
  }
  res.setHeader("location", "/");
  res.statusCode = 302;
  res.end();
  return {
    props: { loggedIn: false },
  };
}, sessionOptions);
