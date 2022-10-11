import { Body } from '@nestjs/common';
import {
  AuthController as Controller,
  RegisterUser,
  LoginUser,
} from './auth.controller.decorator';
import { AuthService } from './auth.service';
import { CreateUserRequestDto } from './dto/create-user.dto';
import { LoginUserRequestDto } from './dto/login-user-request.dto';
import { LoginUserResponseDto } from './dto/login-user-respones.dto';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @RegisterUser()
  async registerUser(@Body() createUserRequestDto: CreateUserRequestDto) {
    await this.authService.registerUser(createUserRequestDto);
    return null;
  }

  @LoginUser()
  async loginUser(@Body() loginUserRequestDto: LoginUserRequestDto) {
    const result = await this.authService.loginUser(loginUserRequestDto);

    return new LoginUserResponseDto(result);
  }
}
