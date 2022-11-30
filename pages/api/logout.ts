import { withIronSessionApiRoute } from "iron-session/next";
import { NextApiRequest, NextApiResponse } from "next";
import { sessionOptions } from "../../lib/session";

function handler(req: NextApiRequest, res: NextApiResponse) {
  req.session.destroy();
  res.json({ success: true });
}

export default withIronSessionApiRoute(handler, sessionOptions);
