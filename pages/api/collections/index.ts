import { withIronSessionApiRoute } from "iron-session/next";
import { NextApiRequest, NextApiResponse } from "next";
import { sessionOptions } from "../../../lib/session";
import { ResponseObject } from "../login";
import { closeConnection, getConnection } from "../../../utils/backend/dbConnection";
import { generateGuid } from "../../../utils/backend/guid";

export interface Collection {
  id: string;
  name: string;
  description?: string;
  created: string;
  item_count: number;
}

async function handler(req: NextApiRequest, res: NextApiResponse<ResponseObject>) {
  const { method } = req;

  if (!req.session.user) {
    res.status(200).json({ success: false, error: "Not logged in" });
    return;
  }

  if (method === "GET") {
    const collections = await getCollectionsByUserId(req.session.user.id);

    res.status(200).json({ success: true, data: collections });
    return;
  } else if (method === "POST") {
    if (!req.session.user) {
      res.status(200).json({ success: false, error: "Not logged in" });
      return;
    }

    const { name, description } = req.body;

    if (!name) {
      res.status(200).json({ success: false, error: "Collection name is required" });
      return;
    }

    const collection = await createCollection(req.session.user.id, name, description);

    if (!collection.success) {
      res.status(200).json({ success: false, error: collection.error });
      return;
    }

    res.status(200).json({ success: true, data: collection });
    return;
  }

  res.status(200).json({ success: false, error: "Invalid method" });
}

export async function getCollectionsByUserId(id: string, sortField = "created_at", sortDir = "ASC"): Promise<Collection[]> {
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
    WHERE uc.user_id = ?
    GROUP BY c.id
    ORDER BY c.${sortField} ${sortDir}`,
    [id]
  );
  closeConnection(db);

  if (!Array.isArray(rows) || rows.length <= 0) return [];

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
  return collections;
}

export async function createCollection(userId: string, name: string, description?: string) {
  const db = await getConnection();

  const [rows] = await db.query("SELECT * FROM collections c INNER JOIN user_collections uc on c.id = uc.collection_id WHERE uc.user_id = ? AND name = ?", [
    userId,
    name,
  ]);

  if (Array.isArray(rows) && rows.length > 0) {
    closeConnection(db);
    return { success: false, error: "Collection already exists" };
  }

  const collectionGuid = generateGuid();
  const [addedCollection] = await db.query("INSERT INTO collections (id, name, description) VALUES (?, ?, ?)", [collectionGuid, name, description]);
  const result: any = addedCollection;
  if (result.affectedRows !== 1) return { success: false, error: "Failed to create collection" };

  await db.query("INSERT INTO user_collections (user_id, collection_id) VALUES (?, ?)", [userId, collectionGuid]);
  closeConnection(db);

  return { success: true, data: { id: collectionGuid, name, description } };
}

export default withIronSessionApiRoute(handler, sessionOptions);
