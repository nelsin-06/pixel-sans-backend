import { Module } from '@nestjs/common';

import { DatabaseModule } from './database/database.module';

import { PostModule } from './post/post.module';
import { TranscriptionVideosModule } from './transcription-videos/transcription-videos.module';

@Module({
  imports: [DatabaseModule, PostModule, TranscriptionVideosModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
