import { User } from ".prisma/client";
import { Args, ID, Mutation, Query, Resolver } from "@nestjs/graphql";
import { CurrentUser } from "src/auth/decorator/current-user.decorator";
import { CreateUserInput } from "./dto/create-user.input";
import { UserModel } from "./user.model";
import { UserService } from "./user.service";

@Resolver(() => UserModel)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => UserModel)
  async me(@CurrentUser() user: User) {
    return this.user(user.id);
  }

  @Query(() => [UserModel])
  async users(): Promise<UserModel[]> {
    const users = await this.userService.findAll();
    return users?.map(UserModel.build) ?? [];
  }

  @Query(() => UserModel)
  async user(@Args("id", { type: () => ID }) id: number): Promise<UserModel | null> {
    const user = await this.userService.findById(id);
    return UserModel.build(user);
  }

  @Mutation(() => UserModel)
  async createUser(@Args("data") createUserInput: CreateUserInput): Promise<UserModel> {
    const user = await this.userService.create(createUserInput);
    return UserModel.build(user);
  }
}
