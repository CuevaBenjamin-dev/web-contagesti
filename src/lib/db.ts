import { Pool } from "pg";

const connectionString = import.meta.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("Falta la variable de entorno DATABASE_URL");
}

export const pool = new Pool({
  connectionString,
  ssl: import.meta.env.PROD ? { rejectUnauthorized: false } : false,
  max: 1,
});

pool.on("error", (error) => {
  console.error("Error inesperado en PostgreSQL:", error);
});
