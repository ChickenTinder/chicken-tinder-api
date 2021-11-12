import { Args, ID, Mutation, Query, Resolver } from "@nestjs/graphql";
import { CreateUserInput } from "./create-user.input";
import { UserModel } from "./user.model";
import { UserService } from "./user.service";

@Resolver(() => UserModel)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [UserModel])
  async users(): Promise<UserModel[]> {
    const users = await this.userService.findAll();
    return users?.map(UserModel.buildFromUser) ?? [];
  }

  @Query(() => UserModel)
  async user(@Args("id", { type: () => ID }) id: number): Promise<UserModel | undefined> {
    const user = await this.userService.findById(id);
    return UserModel.buildFromUser(user);
  }

  @Mutation(() => UserModel)
  async createUser(@Args("data") createUserInput: CreateUserInput): Promise<UserModel> {
    const user = await this.userService.create(createUserInput);
    return UserModel.buildFromUser(user);
  }
}
