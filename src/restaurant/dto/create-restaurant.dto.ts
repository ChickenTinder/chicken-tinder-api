import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateRestaurantDto {
  @Field()
  name: string;
}
