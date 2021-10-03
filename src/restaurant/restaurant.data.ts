import { Restaurant } from "./restaurant.model";

let idCounter = 1;

export const RESTAURANT_DATA: Restaurant[] = [
  { name: "Hello" },
  { name: "World" },
  { name: "foo" },
  { name: "bar" },
].map(buildRestaurant);

function buildRestaurant(overrides: Omit<Restaurant, "id">): Restaurant {
  return {
    id: idCounter++,
    ...overrides,
  };
}
