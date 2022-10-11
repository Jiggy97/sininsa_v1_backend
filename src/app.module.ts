import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { BoardsModule } from './boards/boards.module';
import { BoardsCommentsModule } from './boards/boards-comments/boards-comments.module';
import { AuthModule } from './authentication/auth/auth.module';
import { PrismaModule } from '@app/prisma';
import { AutenticationModule } from './authentication/authentication.module';
import { TokenModule } from './authentication/token/token.module';
import { JwtModule } from '@nestjs/jwt';
import { AccessTokenService } from './authentication/token/access-token.service';
import { RefreshTokenService } from './authentication/token/refresh-token.service';

@Module({
  imports: [
    JwtModule,
    PrismaModule,
    UsersModule,
    BoardsModule,
    BoardsCommentsModule,
    AuthModule,
    AutenticationModule,
    TokenModule,
  ],
  providers: [AccessTokenService, RefreshTokenService],
})
export class AppModule {}
