import { Module } from '@nestjs/common';
import { UserModule } from './users/users.module';
import { BoardsModule } from './boards/boards.module';
import { BoardsCommentsModule } from './boards/boards-comments/boards-comments.module';
import { BoardsCommentsController } from './boards/boards-comments/boards-comments.controller';

@Module({
  imports: [UserModule, BoardsModule, BoardsCommentsModule],
  controllers: [BoardsCommentsController],
})
export class AppModule {}
