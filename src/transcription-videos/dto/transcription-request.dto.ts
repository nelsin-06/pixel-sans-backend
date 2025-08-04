import { IsString } from 'class-validator';

export class TranscriptionRequestDto {
  @IsString()
  videoId: string;
}