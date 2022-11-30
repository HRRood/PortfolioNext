import { sessionOptions, User } from "../../lib/session";
import { getUserByData } from "../api/auth";
import { withIronSessionSsr } from "iron-session/next";

import { InferGetServerSidePropsType } from "next";
import { Collection } from "../api/collections";

import { getCollectionsById } from "../api/collections/[id]";
type Props = {
  collection: Collection;
};

export default function CollectionDetail({ collection }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "20px" }}>
      <h1>Collection: {collection.name}</h1>
      <p>{collection.description}</p>
    </div>
  );
}

export const getServerSideProps = withIronSessionSsr(async function ({ req, res, params }): Promise<{ props: Props }> {
  const user = req.session.user;

  if (params === undefined) {
    return {
      props: {
        collection: {} as Collection,
      },
    };
  }

  if (user === undefined) {
    res.setHeader("location", "/login");
    res.statusCode = 302;
    res.end();
    return {
      props: {
        collection: {} as Collection,
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
        collection: {} as Collection,
      },
    };
  }

  const mappedUser = userData.data as User;

  const userCollection: Collection = await getCollectionsById(mappedUser.id, params.id as string);

  return {
    props: { collection: userCollection },
  };
}, sessionOptions);
