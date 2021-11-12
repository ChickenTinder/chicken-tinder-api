import { Field, Float, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class RestaurantModel {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  imageUrl: string;

  @Field(() => Float)
  rating: number;
}
