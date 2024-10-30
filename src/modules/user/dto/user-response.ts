import { Field, Int, ObjectType } from "@nestjs/graphql";
import { User } from "../schema/user.schema";
@ObjectType()
export class UserResponse implements User {
  @Field(() => Int)
  id?: number | undefined;

  @Field(() => String)
  name: string;

  @Field(() => String)
  email: string;

  password: string;
}
