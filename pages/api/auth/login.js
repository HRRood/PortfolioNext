import { prismaClient } from "../_base";
import Cookies from "cookies";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { invalidResponse, validResponse } from "../../../utils/api/responses";

const prisma = prismaClient;
const secret = process.env.JWT_SECRET;

export default async (req, res) => {
  const method = req.method.toLowerCase();
  const cookies = new Cookies(req, res);
  if (method === "post") {
    const { username, password } = req.body;
    const requiredFields = ["username", "password"];

    const hasAllRequiredFields = requiredFields.every((field) => {
      return Object.keys(req.body).includes(field);
    });

    if (!hasAllRequiredFields) {
      const message = "Not all required fields are filled. Required fields: username, password";
      const data = { username, password };
      return res.json(invalidResponse(message, data));
    }

    const dbUser = await prisma.user.findFirst({ where: { username }, include: { UserRole: { include: { Roles: true } } } });

    if (!dbUser) {
      const message = "No user found with this username";
      const data = { username };
      return res.json(invalidResponse(message, data));
    }
    const user = dbUser;

    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      const message = "Invalid password";
      return res.json(invalidResponse(message));
    }

    user.roles = user.UserRole.map((role) => {
      return role.Roles.name;
    });
    delete user.UserRole;
    delete user.password;
    delete user.token;

    const token = jwt.sign({ userId: user.idUser, firstname: user.firstname, lastname: user.lastname }, secret, { expiresIn: "7d" });

    const splitted = token.split(".")[2];

    await prisma.user.update({ where: { idUser: user.idUser }, data: { token: splitted } });
    cookies.set("token", token);
    return res.json(validResponse("Logged in", user, token));
  }
  res.statusCode = 400;
  res.json(invalidResponse("Route not found"));
};
