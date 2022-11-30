import mysql from "mysql2/promise";
export async function getConnection() {
  const db = await mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  });

  return db;
}

export function closeConnection(db: mysql.Connection) {
  db.end();
}
