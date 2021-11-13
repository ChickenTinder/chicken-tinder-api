import { User } from ".prisma/client";
import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UserService } from "src/user/user.service";
import { comparePassword } from "./auth-utils";
import { AuthPayload } from "./types";

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService, private readonly jwtService: JwtService) {}

  async validateUser(username: string, password: string): Promise<User | null> {
    const user = await this.userService.findByUsername(username);
    const isValid = comparePassword(password, user?.password);
    return isValid ? user : null;
  }

  async login(user: User) {
    const payload: AuthPayload = {
      sub: user.id,
      username: user.username,
    };
    return { access_token: this.jwtService.sign(payload) };
  }
}
