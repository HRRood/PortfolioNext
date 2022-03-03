import Cookies from "cookies";
import jwt from "jsonwebtoken";
import { prismaClient } from "../_base";
import { invalidResponse, validResponse } from "../../../utils/api/responses";

const prisma = prismaClient;
const secret = process.env.JWT_SECRET;

export default async (req, res) => {
  const method = req.method.toLowerCase();
  const cookies = new Cookies(req, res);
  if (method === "get") {
    const tokenCookie = cookies.get("token");

    if (!tokenCookie) {
      return res.json(invalidResponse("unauthorized"));
    }

    let token = null;
    try {
      token = jwt.verify(tokenCookie, secret);
    } catch (e) {
      cookies.set("token");
      return res.json(invalidResponse("unauthorized"));
    }

    if (!token.userId) {
      cookies.set("token");

      return res.json(invalidResponse("unauthorized"));
    }
    const dbUser = await prisma.user.findUnique({ where: { idUser: token.userId }, include: { UserRole: { include: { Roles: true } } } });

    if (!dbUser) {
      cookies.set("token");

      return res.json(invalidResponse("unauthorized"));
    }

    const splitted = tokenCookie.split(".")[2];

    if (dbUser.token !== splitted) {
      cookies.set("token");

      return res.json(invalidResponse("unauthorized"));
    }

    const user = dbUser;
    user.roles = user.UserRole.map((role) => {
      return role.Roles.name;
    });
    delete user.UserRole;
    delete user.password;
    delete user.token;

    return res.json(validResponse("authorized", user));
  }
  res.statusCode = 200;
  res.json({ name: "John Doe" });
};
