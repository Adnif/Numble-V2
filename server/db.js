import Pool from "pg-pool";

export const pool = new Pool({
  user: "postgres",
  password: "bebemoreno12",
  host: "localhost",
  port: 5432,
  database: "numbledb",
});
