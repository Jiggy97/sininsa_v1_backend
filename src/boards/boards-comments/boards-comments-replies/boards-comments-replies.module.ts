import { Module } from '@nestjs/common';
import { BoardsCommentsRepliesController } from './boards-comments-replies.controller';
import { BoardsCommentsRepliesService } from './boards-comments-replies.service';

@Module({
  controllers: [BoardsCommentsRepliesController],
  providers: [BoardsCommentsRepliesService]
})
export class BoardsCommentsRepliesModule {}
