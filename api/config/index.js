import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd() + "/.env") });

export default {
  mongodb_url: process.env.MONGODB_URL,
  port: process.env.PORT,
  jwt_secret: process.env.JWT_SECRET
};
