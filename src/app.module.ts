import { Module } from "@nestjs/common";
import { GraphqlModule } from "./shared/graphql/graphql.module";
import { DatabaseModule } from "./shared/database/database.module";
import { UserModule } from "./modules/user/user.module";
import { AuthModule } from "./modules/auth/auth.module";
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, envFilePath: ".env" }),
    GraphqlModule,
    DatabaseModule,
    UserModule,
    AuthModule,
  ],
})
export class AppModule {}
