import { PrismaService } from '@app/prisma';
import { Crypto } from '@app/utils/crypto';
import {
  BadRequestException,
  ConflictException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { Users } from '@prisma/client';
import { UsersService } from 'src/users/users.service';
import { CreateUserRequestDto } from './dto/create-user.dto';
import { LoginUserRequestDto } from './dto/login-user-request.dto';
import { LoginUserResponseDto } from './dto/login-user-respones.dto';
import { AuthError } from './error';
import { AccessTokenService } from '../token/access-token.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly accessTokenService: AccessTokenService,
  ) {}

  async registerUser({ email, password }: CreateUserRequestDto): Promise<void> {
    try {
      const hashedPassword = await Crypto.encrypt(password);
      await this.usersService.create({
        email,
        password: hashedPassword,
      });
    } catch (error) {
      if (PrismaService.isPrismaError(error)) {
        throw new ConflictException(AuthError.DUPLICATE_EMAIL);
      }
      throw new InternalServerErrorException(error);
    }
  }

  private async getUserWithValidate(
    email: string,
    password: string,
  ): Promise<Users> {
    const user = await this.usersService.getUserByEmailWithValidate(email);

    const isSamePassword = await Crypto.isMatch(password, user.password);
    if (!isSamePassword) {
      throw new BadRequestException(AuthError.IS_NOT_MATCH_PASSWORD);
    }

    return user;
  }

  async loginUser({
    email,
    password,
  }: LoginUserRequestDto): Promise<LoginUserResponseDto> {
    const { id: userId } = await this.getUserWithValidate(email, password);

    return {
      accessToken: this.accessTokenService.generateAccessToken({ userId }),
    };
  }
}
