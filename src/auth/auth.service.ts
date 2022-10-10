import { Crypto } from '@app/utils/crypto';
import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { CreateUserRequestDto } from './dto/create-user.dto';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async registerUser({ email, password }: CreateUserRequestDto): Promise<void> {
    try {
      const hashedPassword = await Crypto.encrypt(password);
      await this.usersService.create({
        email,
        password: hashedPassword,
      });
    }
    const hashedPassword = await Crypto.encrypt(password);
    return this.usersService.registerUser(email, hashedPassword);
  }

  async login(password: string, hash: string) {
    const authaccount = await Crypto.isMatch(password, hash);
    return authaccount;
  }
}
