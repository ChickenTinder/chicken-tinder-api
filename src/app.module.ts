import { Module } from "@nestjs/common";
import { ExampleModule } from "./example/example.module";
import { StatusModule } from "./status/status.module";

@Module({
  imports: [ExampleModule, StatusModule],
})
export class AppModule {}
