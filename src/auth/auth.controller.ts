import { Request, Controller, Post, UseGuards } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthGuard } from "@nestjs/passport";
import { Public } from "./decorator/public.decorator";

@Controller("/auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @UseGuards(AuthGuard("local"))
  @Post("/login")
  authenticate(@Request() req): Promise<any> {
    return this.authService.login(req.user);
  }
}
