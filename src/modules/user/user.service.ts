import { Inject, Injectable } from "@nestjs/common";
import { desc } from "drizzle-orm";
import { MySql2Database } from "drizzle-orm/mysql2";
import { DATABASE_CONNECTION } from "src/common/constants";
import * as schema from "src/modules/schema";

@Injectable()
export class UserService {
  constructor(
    @Inject(DATABASE_CONNECTION)
    private readonly drizzle: MySql2Database<typeof schema>
  ) {}

  async findAll() {
    return await this.drizzle
      .select({
        id: schema.users.id,
        name: schema.users.name,
        email: schema.users.email,
        createdAt: schema.users.createdAt,
        updatedAt: schema.users.updatedAt,
      })
      .from(schema.users)
      .orderBy(desc(schema.users.id));
  }
}
