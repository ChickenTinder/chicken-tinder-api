import { User } from ".prisma/client";
import { Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class UserModel {
  @Field(() => ID)
  id: number;

  username: string;

  static build(user?: User): UserModel | null {
    if (!user) return null;
    return {
      id: user.id,
      username: user.username,
    };
  }
}
