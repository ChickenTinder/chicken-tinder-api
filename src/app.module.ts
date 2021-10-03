import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { ExampleModule } from "./example/example.module";
import { RestaurantModule } from "./restaurant/restaurant.module";
import { StatusModule } from "./status/status.module";

@Module({
  imports: [
    GraphQLModule.forRoot({
      playground: true,

      // Schema is generated in-memory
      autoSchemaFile: true,
    }),
    RestaurantModule,
    ExampleModule,
    StatusModule,
  ],
})
export class AppModule {}
