import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Restaurant {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;
}
