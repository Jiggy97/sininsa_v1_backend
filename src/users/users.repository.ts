import { Injectable } from '@nestjs/common';
import { PrismaService } from '@app/prisma';
import { Prisma, Users } from '@prisma/client';

@Injectable()
export class UsersRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(data: Prisma.UsersUncheckedCreateInput): Promise<Users> {
    return this.prismaService.users.create({
      data,
    });
  }

  update(userId: number, data: Prisma.UsersUncheckedUpdateInput) {
    return this.prismaService.users.update({
      where: {
        id: userId,
      },
      data,
    });
  }

  findByEmail(email: string): Promise<Users | null> {
    return this.prismaService.users.findUnique({
      where: {
        email,
      },
    });
  }
}
