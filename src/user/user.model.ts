import { User } from ".prisma/client";
import { Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class UserModel {
  @Field(() => ID)
  id: number;

  username: string;

  static buildFromUser(user?: User): UserModel | undefined {
    if (!user) {
      return user;
    }
    return {
      id: user.id,
      username: user.username,
    };
  }
}
