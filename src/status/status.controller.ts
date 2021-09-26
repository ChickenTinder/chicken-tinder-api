import { Controller, Get } from "@nestjs/common";
import { StatusResponseDto } from "./status-response.dto";

@Controller("/status")
export class StatusController {
  @Get()
  status(): StatusResponseDto {
    return { success: true };
  }
}
