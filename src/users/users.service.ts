import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma, Users } from '@prisma/client';
import { UsersError } from './error';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  create(data: Prisma.UsersUncheckedCreateInput) {
    return this.usersRepository.create(data);
  }

  async getUserByEmailWithValidate(email: string): Promise<Users> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user || !user.status) {
      throw new NotFoundException(UsersError.NOT_FOUND_USER);
    }

    return user;
  }
}
