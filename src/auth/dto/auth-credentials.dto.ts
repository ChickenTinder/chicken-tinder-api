import { IsNotEmpty, IsString } from "class-validator";

export class AuthCredentialsDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
