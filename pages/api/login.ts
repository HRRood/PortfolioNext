import { withIronSessionApiRoute } from "iron-session/next";
import { sessionOptions } from "../../lib/session";
import { comparePassword } from "../../utils/backend/hashPassword";
import { NextApiRequest, NextApiResponse } from "next";
import { mapUserDataToSession } from "./auth";
import { closeConnection, getConnection } from "../../utils/backend/dbConnection";

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
  const db = await getConnection();
  const { email, password } = req.body;
  const { method } = req;

  if (method === "POST") {
    try {
      if (req.session.user) {
        res.status(200).json({ success: false, error: "Already logged in" });
        return;
      }

      if (!email || !password) {
        res.status(200).json({ success: false, error: "Email and password are required" });
        return;
      }

      const [rows] = await db.query("SELECT * FROM users WHERE email = ?", [email]);

      if (!Array.isArray(rows)) return res.status(500).json({ success: false, error: "Internal server error" });

      if (rows.length === 0) {
        closeConnection(db);
        res.status(200).json({ success: false, error: "User not found" });
        return;
      }

      const user = rows[0] as DBUser;

      if (!comparePassword(password, user.password)) {
        closeConnection(db);
        res.status(200).json({ success: false, error: "Invalid password" });
        return;
      }

      const userData = mapUserDataToSession(user);

      req.session.user = userData;
      await req.session.save();
      closeConnection(db);

      return res.status(200).json({ success: true, message: "Logged in successfully", data: userData });
    } catch (error) {
      closeConnection(db);

      return res.status(500).json({ message: "Internal server error", success: false });
    }
  } else {
    closeConnection(db);

    return res.status(200).json({ success: false, error: "Invalid request method" });
  }
}

export default withIronSessionApiRoute(handler, sessionOptions);
