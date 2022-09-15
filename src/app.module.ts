import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/users.module';
import { BoardsModule } from './boards/boards.module';
import { BoardsCommentsModule } from './boards/boards-comments/boards-comments.module';
import { BoardsCommentsController } from './boards/boards-comments/boards-comments.controller';

@Module({
  imports: [UserModule, BoardsModule, BoardsCommentsModule],
  controllers: [AppController, BoardsCommentsController],
  providers: [AppService],
})
export class AppModule {}
