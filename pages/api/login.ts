// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import mysql from "mysql2/promise";
import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOptions } from "../../lib/session";
import { comparePassword } from "../../utils/backend/hashPassword";
import { NextApiRequest, NextApiResponse } from "next";
import { mapUserDataToSession } from "./auth";

export interface ResponseObject {
  success: boolean;
  error?: string;
  message?: string;
  data?: any;
}

export interface DBUser {
  id: string;
  email: string;
  password: string;
  firstname: string;
  lastname: string;
}

async function handler(req: NextApiRequest, res: NextApiResponse<ResponseObject>) {
  const db = await mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  });
  const { email, password } = req.body;
  const { method } = req;

  if (method === "POST") {
    try {
      const [rows] = await db.query("SELECT * FROM users WHERE email = ?", [email]);

      if (!Array.isArray(rows)) return res.status(500).json({ success: false, error: "Internal server error" });

      if (rows.length === 0) {
        db.destroy();
        res.status(200).json({ success: false, error: "Invalid email or password" });
        return;
      }

      const user = rows[0] as DBUser;

      if (!comparePassword(password, user.password)) {
        db.destroy();

        res.status(200).json({ success: false, error: "Invalid email or password" });
        return;
      }

      const userData = mapUserDataToSession(user);

      req.session.user = userData;
      await req.session.save();
      db.destroy();

      return res.status(200).json({ success: true, message: "Logged in successfully", data: userData });
      // return res.status(200).json({ message: "Login successful", success: true, userData });
    } catch (error) {
      db.destroy();

      return res.status(500).json({ message: "Internal server error", success: false });
    }
  } else {
    db.destroy();

    return res.status(200).json({ success: false, error: "Invalid request method" });
  }
}

export default withIronSessionApiRoute(handler, sessionOptions);
