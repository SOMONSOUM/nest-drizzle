import { Inject, Injectable } from "@nestjs/common";
import { DATABASE_CONNECTION } from "src/common/constants";
import { MySql2Database } from "drizzle-orm/mysql2";
import { migrate } from "drizzle-orm/mysql2/migrator";
import * as schema from "src/modules/schema";

@Injectable()
export class DatabaseService {
  constructor(
    @Inject(DATABASE_CONNECTION)
    private readonly database: MySql2Database<typeof schema>
  ) {}

  async migrate() {
    await migrate(this.database, { migrationsFolder: "db/migrations" });
  }
}
