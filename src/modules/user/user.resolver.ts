import { Resolver } from "@nestjs/graphql";
import { UserService } from "./user.service";
import { Query } from "@nestjs/graphql";
import { UserResponse } from "./dto";

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [UserResponse])
  async users() {
    return await this.userService.findAll();
  }
}
