import { NotFoundException } from "@nestjs/common";
import { Args, Int, Mutation, Query, Resolver } from "@nestjs/graphql";
import { CreateRestaurantInput } from "./dto/create-restaurant.input";
import { RestaurantModel } from "./restaurant.model";
import { RestaurantService } from "./restaurant.service";

@Resolver(() => RestaurantModel)
export class RestaurantResolver {
  constructor(private readonly restaurantService: RestaurantService) {}

  @Query(() => RestaurantModel)
  async restaurant(
    @Args("id", { type: () => Int }) id: number
  ): Promise<RestaurantModel | undefined> {
    const restaurant = await this.restaurantService.findById(id);
    if (!restaurant) {
      throw new NotFoundException();
    }
    return restaurant;
  }

  @Query(() => [RestaurantModel])
  restaurants(): Promise<RestaurantModel[]> {
    return this.restaurantService.findAll();
  }

  @Mutation(() => RestaurantModel)
  createRestaurant(@Args("data") createRestaurantData: CreateRestaurantInput) {
    return this.restaurantService.create(createRestaurantData);
  }
}
