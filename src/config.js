import { config as dotenv } from "dotenv";
dotenv();

export const config = {
  host: process.env.DB_HOST || "localhost",
  database: process.env.DB_NAME || "local",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
};
