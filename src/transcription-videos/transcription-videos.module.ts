import { Module } from '@nestjs/common';
import { TranscriptionVideosService } from './transcription-videos.service';
import { TranscriptionVideosController } from './transcription-videos.controller';

@Module({
  controllers: [TranscriptionVideosController],
  providers: [TranscriptionVideosService],
})
export class TranscriptionVideosModule {}
