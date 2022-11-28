import bcrypt from "bcryptjs";

export function hashPassword(password: string): string {
  const saltRounds = parseInt(process.env.SALT_ROUNDS || "14", 10);
  const salt = bcrypt.genSaltSync(saltRounds);
  return bcrypt.hashSync(password, salt);
}

export function comparePassword(password: string, hash: string): boolean {
  return bcrypt.compareSync(password, hash);
}
