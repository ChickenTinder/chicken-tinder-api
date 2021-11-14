import { Restaurant } from ".prisma/client";
import { Field, Float, ID, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class RestaurantModel {
  @Field(() => ID)
  id: number;
  name: string;
  imageUrl: string;

  @Field(() => Float)
  rating: number;

  static build(restaurant: Restaurant): RestaurantModel | null {
    if (!restaurant) return null;
    return {
      id: restaurant.id,
      name: restaurant.name,
      imageUrl: restaurant.imageUrl,
      rating: restaurant.rating,
    };
  }
}
