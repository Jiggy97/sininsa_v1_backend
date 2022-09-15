import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/users.module';
import { BoardsModule } from './boards/boards.module';
import { BoardsCommentsModule } from './boards/boards-comments/boards-comments.module';
import { BoardsCommentsController } from './boards-comments/boards-comments.controller';
import { BoardsCommentsRepliesModule } from './boards-comments-replies/boards-comments-replies.module';

@Module({
  imports: [UserModule, BoardsModule, BoardsCommentsModule, BoardsCommentsRepliesModule],
  controllers: [AppController, BoardsCommentsController],
  providers: [AppService],
})
export class AppModule {}
