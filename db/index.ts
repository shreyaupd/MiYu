import {config} from "dotenv";
config({path:'.env.local'})
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as schema from "./schema";
const connectionString= process.env.DATABASE_URL
if(!connectionString){
    throw new Error("DATABASE_URL is not defined");
}
const pool = new Pool({
  connectionString,
  ssl: connectionString.includes("sslmode=require")?{rejectUnauthorized:false}:false,
  max: 10,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 12000,
});
const db = drizzle( pool, {schema});

export default db;
