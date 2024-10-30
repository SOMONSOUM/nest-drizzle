import { Module } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import * as mysql from "mysql2/promise";
import { drizzle } from "drizzle-orm/mysql2";
import { DATABASE_CONNECTION } from "src/common/constants";
import * as schema from "src/modules/schema";

@Module({
  providers: [
    {
      provide: DATABASE_CONNECTION,
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => {
        const pool = mysql.createPool({
          uri: config.getOrThrow("DATABASE_URL"),
        });
        return drizzle({
          client: pool,
          schema: { ...schema },
          mode: "default",
        });
      },
    },
  ],
  exports: [DATABASE_CONNECTION],
})
export class DatabaseModule {}
