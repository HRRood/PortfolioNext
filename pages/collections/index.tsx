import { sessionOptions, User } from "../../lib/session";
import { withIronSessionSsr } from "iron-session/next";

import { InferGetServerSidePropsType } from "next";
import { Collection, getCollectionsByUserId } from "../api/collections";

import styles from "../../styles/components/Table.module.scss";
import Router from "next/router";
type Props = {
  collections: Collection[];
};

export default function Collections({ collections }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const onTableRowClick = (collectionId: string) => {
    // do something
    Router.push(`/collections/${collectionId}`);
  };

  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: "20px" }}>
      <h1>Collections</h1>
      <div style={{ width: "100%" }}>
        <table className={styles.table}>
          <thead className={styles.table_header}>
            <tr>
              <th>Collection</th>
              <th>Created</th>
              <th>Description</th>
              <th>Items</th>
            </tr>
          </thead>
          <tbody>
            {collections.map((collection) => (
              <tr
                className={styles.table_row}
                key={collection.id}
                onClick={() => {
                  onTableRowClick(collection.id);
                }}
              >
                <td>{collection.name}</td>
                <td>{collection.created}</td>
                <td>{collection.description}</td>
                <td>{collection.item_count}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export const getServerSideProps = withIronSessionSsr(async function ({ req, res }): Promise<{ props: Props }> {
  const user = req.session.user;

  if (user === undefined) {
    res.setHeader("location", "/login");
    res.statusCode = 302;
    res.end();
    return {
      props: {
        collections: [],
      },
    };
  }

  const userCollections: Collection[] = await getCollectionsByUserId(user.id);
  return {
    props: { collections: userCollections },
  };
}, sessionOptions);
