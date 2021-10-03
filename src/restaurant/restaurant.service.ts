import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { Restaurant } from "./restaurant.model";

@Injectable()
export class RestaurantService {
  constructor(private readonly prismaService: PrismaService) {}

  async findAll(): Promise<Restaurant[]> {
    return this.prismaService.restaurant.findMany();
  }

  async findById(id: number): Promise<Restaurant | undefined> {
    return this.prismaService.restaurant.findUnique({ where: { id } });
  }

  async create(restaurant: Omit<Restaurant, "id">): Promise<Restaurant> {
    return this.prismaService.restaurant.create({ data: restaurant });
  }
}
