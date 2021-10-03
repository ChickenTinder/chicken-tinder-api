import { NotFoundException } from "@nestjs/common";
import { Args, Int, Mutation, Query, Resolver } from "@nestjs/graphql";
import { CreateRestaurantDto } from "./dto/create-restaurant.dto";
import { Restaurant } from "./restaurant.model";
import { RestaurantService } from "./restaurant.service";

@Resolver((of) => Restaurant)
export class RestaurantResolver {
  constructor(private readonly restaurantService: RestaurantService) {}

  @Query((returns) => Restaurant)
  async restaurant(@Args("id", { type: () => Int }) id: number): Promise<Restaurant | undefined> {
    const restaurant = await this.restaurantService.findById(id);
    if (!restaurant) {
      throw new NotFoundException();
    }
    return restaurant;
  }

  @Query((returns) => [Restaurant])
  restaurants(): Promise<Restaurant[]> {
    return this.restaurantService.findAll();
  }

  @Mutation((returns) => Restaurant)
  createRestaurant(@Args("data") createRestaurantData: CreateRestaurantDto) {
    return this.restaurantService.create(createRestaurantData);
  }
}
