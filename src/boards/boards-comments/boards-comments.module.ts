import { Module } from '@nestjs/common';
import { BoardsCommentsService } from './boards-comments.service';

@Module({
  providers: [BoardsCommentsService],
})
export class BoardsCommentsModule {}
