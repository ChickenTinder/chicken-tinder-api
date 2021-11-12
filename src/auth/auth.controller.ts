import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthCredentialsDto } from "./dto/auth-credentials.dto";

@Controller("/auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("/login")
  authenticate(@Body() authenticateRequest: AuthCredentialsDto): Promise<boolean> {
    return this.authService.authenticateUser(authenticateRequest);
  }
}
