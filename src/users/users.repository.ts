import { Injectable } from '@nestjs/common';
import { PrismaService } from '@app/prisma';

@Injectable()
export class UsersRepository {
  constructor(private readonly prismaService: PrismaService) {}

  createUser(email: string, password: string) {
    return this.prismaService.users.create({
      data: {
        email,
        password,
      },
    });
  }

  findOne(email: string) {
    return this.prismaService.users.findUnique({
      where: {
        email,
      },
    });
  }
}
