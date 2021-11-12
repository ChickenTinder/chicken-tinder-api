import { Field, Float, InputType } from "@nestjs/graphql";

@InputType()
export class CreateRestaurantInput {
  name: string;
  imageUrl: string;

  @Field(() => Float)
  rating: number;
}
