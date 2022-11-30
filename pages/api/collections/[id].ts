import { withIronSessionApiRoute } from "iron-session/next";
import { NextApiRequest, NextApiResponse } from "next";
import { sessionOptions } from "../../../lib/session";
import { ResponseObject } from "../login";
import { closeConnection, getConnection } from "../../../utils/backend/dbConnection";
import { Collection } from "./index";

async function handler(req: NextApiRequest, res: NextApiResponse<ResponseObject>) {
  const { method } = req;

  if (!req.session.user) {
    res.status(200).json({ success: false, error: "Not logged in" });
    return;
  }

  if (method === "GET") {
    const { id } = req.query;
    const collection = await getCollectionsById(req.session.user.id, id as string);

    res.status(200).json({ success: true, data: collection });
    return;
  }

  res.status(200).json({ success: false, error: "Invalid method" });
}

export async function getCollectionsById(userId: string, collectionId: string): Promise<Collection> {
  const db = await getConnection();
  const [rows] = await db.query(
    `SELECT
      c.id, c.name,
      c.description,
      c.created_at,
      count(distinct i.id) as item_count
    FROM collections c
    INNER JOIN user_collections uc
    ON c.id = uc.collection_id
    LEFT JOIN items i
    ON c.id = i.collection_id
    WHERE uc.user_id = ? AND c.id = ?
    GROUP BY c.id`,
    [userId, collectionId]
  );
  closeConnection(db);

  if (!Array.isArray(rows) || rows.length <= 0) return {} as Collection;

  const collections: Collection[] = rows.map((row: any) => {
    // format the date to a string dd-mm-yyyy hh:mm:ss
    const date = new Date(row.created_at);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const dateString = `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;

    return {
      id: row.id,
      name: row.name,
      description: row.description,
      created: dateString,
      item_count: row.item_count,
    };
  });
  return collections[0];
}

export default withIronSessionApiRoute(handler, sessionOptions);
