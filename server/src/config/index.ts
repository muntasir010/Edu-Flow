import dotenv from "dotenv";
import { SignOptions } from "jsonwebtoken";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

export default {
  node_env: process.env.NODE_ENV,
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,

  jwt_access_secret: process.env.JWT_ACCESS_SECRET as string,
  jwt_access_expires_in: process.env.JWT_EXPIRES_IN || '7d',
//   jwt_refresh_secret: process.env.JWT_REFRESH_SECRET as string,
//   jwt_refresh_expires_in: process.env
//     .JWT_REFRESH_EXPIRES_IN as SignOptions["expiresIn"],
};
