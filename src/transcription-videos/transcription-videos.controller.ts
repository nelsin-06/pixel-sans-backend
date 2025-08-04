import { Body, Controller, Post } from '@nestjs/common';
import { TranscriptionVideosService } from './transcription-videos.service';
import { TranscriptionRequestDto } from './dto/transcription-request.dto';
import { TranscriptionResponseDto } from './dto/transcription-response.dto';

@Controller('transcriptions')
export class TranscriptionVideosController {
  constructor(
    private readonly transcriptionVideosService: TranscriptionVideosService,
  ) {}

  @Post()
  async getTranscriptions(
    @Body() body: TranscriptionRequestDto[],
  ): Promise<{ results: TranscriptionResponseDto[] | any }> {
    console.log(
      '🚀 ~ TranscriptionVideosController ~ getTranscriptions ~ body:',
      body,
    );
    const results =
      await this.transcriptionVideosService.transcribeMultipleVideos(body);
    return { results };
  }
}
