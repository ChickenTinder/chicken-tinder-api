import { Injectable } from "@nestjs/common";
import { RESTAURANT_DATA } from "./restaurant.data";
import { Restaurant } from "./restaurant.model";

@Injectable()
export class RestaurantService {
  findAll(): Restaurant[] {
    return RESTAURANT_DATA;
  }

  findById(id: number): Restaurant | undefined {
    return RESTAURANT_DATA.find((restaurant) => restaurant?.id === id);
  }
}
