import { Injectable } from "@nestjs/common";
import { UserService } from "src/user/user.service";
import { comparePassword } from "./auth-utils";
import { AuthCredentialsDto } from "./dto/auth-credentials.dto";

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async authenticateUser(authenticateRequest: AuthCredentialsDto): Promise<boolean> {
    const user = await this.userService.findByUsername(authenticateRequest.name);
    return comparePassword(authenticateRequest.password, user.password);
  }
}
