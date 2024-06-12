import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });

export default {
  port: process.env.PORT,
  database_url: `${process.env.MONGODB_URL}`,
  salt: process.env.SALT,
  node_ENV: `${process.env.node_ENV}`,
};
