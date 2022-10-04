import { Injectable } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class LoginService {
  constructor(
    private readonly usersService: UsersService,
    private readonly authService: AuthService,
  ) {}

  async login(email: string, password: string) {
    const hash = (await this.usersService.findOne(email)).password;
    const authaccount = await this.authService.login(password, hash);

    return authaccount;
  }
}
