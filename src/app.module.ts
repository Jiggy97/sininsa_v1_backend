import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { BoardsModule } from './boards/boards.module';
import { BoardsCommentsModule } from './boards/boards-comments/boards-comments.module';
import { BoardsCommentsController } from './boards/boards-comments/boards-comments.controller';
import { AuthModule } from './auth/auth.module';
import { PrismaModule } from '@app/prisma';

@Module({
  imports: [
    PrismaModule,
    UsersModule,
    BoardsModule,
    BoardsCommentsModule,
    AuthModule,
  ],
  controllers: [BoardsCommentsController],
})
export class AppModule {}
