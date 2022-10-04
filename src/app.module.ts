import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { BoardsModule } from './boards/boards.module';
import { BoardsCommentsModule } from './boards/boards-comments/boards-comments.module';
import { BoardsCommentsController } from './boards/boards-comments/boards-comments.controller';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from '@app/prisma';
import { LoginModule } from './login/login.module';

@Module({
  imports: [
    PrismaModule,
    UsersModule,
    BoardsModule,
    BoardsCommentsModule,
    AuthModule,
    LoginModule,
  ],
  controllers: [BoardsCommentsController],
})
export class AppModule {}
