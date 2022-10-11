import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString, Matches } from 'class-validator';

export class LoginUserRequestDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  @IsString()
  readonly email: string;

  @ApiProperty()
  @IsNotEmpty()
  @Matches(/^[A-Za-z\d!@#$%^&*()]{8,30}$/, {
    message: '영문, 숫자, 특수문자 포함 8 - 16 자리 비밀번호가 필요합니다.',
  }) // 정규 표현식
  @IsString()
  readonly password: string;
}
