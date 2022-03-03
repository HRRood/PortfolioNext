import bcrypt from "bcrypt";
import { prismaClient } from "../_base";
import { invalidResponse, validResponse } from "../../../utils/api/responses";

const prisma = prismaClient;

export default async (req, res) => {
  const method = req.method.toLowerCase();
  if (method === "post") {
    const { username, firstname, lastname, password } = req.body;
    const requiredFields = ["username", "firstname", "lastname", "password"];

    const hasAllRequiredFields = requiredFields.every((field) => {
      return Object.keys(req.body).includes(field);
    });

    if (!hasAllRequiredFields) {
      const message = "Not all required fields are filled. Required fields: username, firstname, lastname, password";
      const data = { username, firstname, lastname, password };
      return res.json(invalidResponse(message, data));
    }

    const existingUser = await prisma.user.findFirst({ where: { username } });

    if (existingUser) {
      const message = "User with this username already exists";
      const data = { username, firstname, lastname, password };
      return res.json(invalidResponse(message, data));
    }

    const salt = await bcrypt.genSalt(15);
    const hashedPassword = await bcrypt.hash(password, salt);

    let user = null;
    try {
      user = await prisma.user.create({
        data: {
          username,
          firstname,
          lastname,
          password: hashedPassword,
        },
      });
    } catch (e) {
      return res.json(invalidResponse("Something went wrong creating the user. Code: 2"));
    }

    try {
      await prisma.userRole.create({ data: { idUser: user.idUser, idRole: 2 } });
    } catch (e) {
      return res.json(invalidResponse("Something went wrong creating the user. Code: 3"));
    }

    return res.json(validResponse("User created", user));
  }
  res.statusCode = 404;
  res.json(invalidResponse("Route not found"));
};
