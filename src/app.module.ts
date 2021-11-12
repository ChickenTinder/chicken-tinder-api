import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { AuthModule } from "./auth/auth.module";
import { ExampleModule } from "./example/example.module";
import { RestaurantModule } from "./restaurant/restaurant.module";
import { StatusModule } from "./status/status.module";
import { UserModule } from "./user/user.module";

@Module({
  imports: [
    GraphQLModule.forRoot({
      playground: true,

      // Schema is generated in-memory
      autoSchemaFile: true,
    }),
    AuthModule,
    UserModule,
    RestaurantModule,
    ExampleModule,
    StatusModule,
  ],
})
export class AppModule {}
