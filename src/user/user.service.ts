import { User } from ".prisma/client";
import { Injectable } from "@nestjs/common";
import { hashPassword } from "src/auth/auth-utils";
import { PrismaService } from "src/prisma/prisma.service";
import { CreateUserInput } from "./dto/create-user.input";

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  findAll(): Promise<User[]> {
    return this.prismaService.user.findMany();
  }

  findById(id: number): Promise<User | undefined> {
    return this.prismaService.user.findUnique({ where: { id } });
  }

  findByUsername(username: string): Promise<User | undefined> {
    return this.prismaService.user.findUnique({ where: { username } });
  }

  async create(createUserInput: CreateUserInput): Promise<User> {
    const hashedPassword = await hashPassword(createUserInput.password);
    return this.prismaService.user.create({
      data: {
        username: createUserInput?.username,
        password: hashedPassword,
      },
    });
  }
}
