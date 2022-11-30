import { NextApiRequest, NextApiResponse } from "next";
import mysql from "mysql2/promise";

import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOptions, User } from "../../lib/session";
import { DBUser } from "./login";
import { closeConnection, getConnection } from "../../utils/backend/dbConnection";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.session.user) {
    const userById = await getUserByData(req.session.user);

    if (!userById || !userById.success) {
      req.session.destroy();

      return res.status(200).json({ success: false, error: "User not found" });
    }

    const updatedUser = userById.data as User;
    res.json({
      data: updatedUser,
      isLoggedIn: true,
      success: true,
    });

    // in a real world application you might read the user id from the session and then do a database request
    // to get more information on the user if needed
  } else {
    req.session.destroy();

    res.json({
      isLoggedIn: false,
      success: false,
    });
  }
}

export async function getUserByData(userData: User) {
  try {
    const db = await getConnection();

    const [rows] = await db.query("SELECT * FROM users WHERE id = ?", [userData.id]);

    if (!Array.isArray(rows)) return { success: false };

    if (rows.length === 0) return { success: false };

    const user = rows[0] as DBUser;

    closeConnection(db);

    return {
      success: true,
      data: mapUserDataToSession(user),
    };
  } catch (error) {
    console.error(error);

    return { success: false };
  }
}

export function mapUserDataToSession(user: DBUser): User {
  return {
    id: user.id,
    email: user.email,
    firstname: user.firstname,
    lastname: user.lastname,
  };
}

export default withIronSessionApiRoute(handler, sessionOptions);
