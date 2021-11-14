import { NotFoundException } from "@nestjs/common";
import { Args, Int, Mutation, Query, Resolver } from "@nestjs/graphql";
import { CreateRestaurantInput } from "./dto/create-restaurant.input";
import { RestaurantModel } from "./restaurant.model";
import { RestaurantService } from "./restaurant.service";

@Resolver(() => RestaurantModel)
export class RestaurantResolver {
  constructor(private readonly restaurantService: RestaurantService) {}

  @Query(() => RestaurantModel)
  async restaurant(@Args("id", { type: () => Int }) id: number): Promise<RestaurantModel | null> {
    const restaurant = await this.restaurantService.findById(id);
    if (!restaurant) {
      throw new NotFoundException();
    }
    return RestaurantModel.build(restaurant);
  }

  @Query(() => [RestaurantModel])
  async restaurants(): Promise<RestaurantModel[]> {
    const restaurants = await this.restaurantService.findAll();
    return restaurants?.map(RestaurantModel.build) ?? [];
  }

  @Mutation(() => RestaurantModel)
  async createRestaurant(
    @Args("data") createRestaurantData: CreateRestaurantInput
  ): Promise<RestaurantModel> {
    const restaurant = await this.restaurantService.create(createRestaurantData);
    return RestaurantModel.build(restaurant);
  }
}
