import { Controller, Get, Param } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { LoginDto } from '../auth/dto/login.dto';
import { LoginService } from './login.service';

@Controller('login')
@ApiTags('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Get('/')
  @ApiOperation({
    summary: '로그인API',
  })
  async login(@Param() { email, password }: LoginDto) {
    return this.loginService.login(email, password);
  }
}
