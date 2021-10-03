import { Args, Int, Query, Resolver } from "@nestjs/graphql";
import { Restaurant } from "./restaurant.model";
import { RestaurantService } from "./restaurant.service";

@Resolver((of) => Restaurant)
export class RestaurantResolver {
  constructor(private readonly restaurantService: RestaurantService) {}

  @Query((returns) => Restaurant)
  async restaurant(@Args("id", { type: () => Int }) id: number): Promise<Restaurant | undefined> {
    return this.restaurantService.findById(id);
  }

  @Query((returns) => [Restaurant])
  async restaurants(): Promise<Restaurant[]> {
    return this.restaurantService.findAll();
  }
}
