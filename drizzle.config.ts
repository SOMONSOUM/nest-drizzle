import "dotenv/config";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  verbose: true,
  strict: true,
  out: "./drizzle",
  schema: "./src/**/*.schema.ts",
  dialect: "mysql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});
