import { RestaurantModel } from "./restaurant.model";

let idCounter = 1;

export const RESTAURANT_DATA: RestaurantModel[] = [
  { name: "Hello" },
  { name: "World" },
  { name: "foo" },
  { name: "bar" },
].map(buildRestaurant);

function buildRestaurant(overrides: Omit<RestaurantModel, "id">): RestaurantModel {
  return {
    id: idCounter++,
    ...overrides,
  };
}
