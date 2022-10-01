import { Crypto } from '@app/utils/crypto';
import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async createUser({ email, password }: CreateUserDto) {
    const hashedPassword = await Crypto.encrypt(password);
    return this.usersService.createUser(email, hashedPassword);
  }
}
