import { Module } from "@nestjs/common";
import { PrismaModule } from "src/prisma/prisma.module";
import { RestaurantResolver } from "./restaurant.resolver";
import { RestaurantService } from "./restaurant.service";

@Module({
  imports: [PrismaModule],
  providers: [RestaurantService, RestaurantResolver],
})
export class RestaurantModule {}
