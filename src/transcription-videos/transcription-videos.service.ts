import { Injectable } from '@nestjs/common';
import OpenAI from 'openai';
import * as youtubedl from 'youtube-dl-exec';
import * as fs from 'fs';
import * as path from 'path';
import { execSync } from 'child_process';

@Injectable()
export class TranscriptionVideosService {
  private openai: OpenAI;

  constructor() {
    this.openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
  }

  async transcribeYouTubeVideo(videoUrl: string): Promise<string> {
    const tempDir = './temp';
    let audioFile: string | null = null;

    try {
      // Descargar el video y obtener el archivo de audio
      audioFile = await this.downloadYouTubeVideo(videoUrl);

      if (!audioFile) {
        throw new Error('Failed to download audio file.');
      }

      // Realizar la transcripción
      const transcription = await this.transcription(audioFile);

      if (!transcription) {
        throw new Error('Transcription failed.');
      }

      return transcription;
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : 'Unknown error occurred during transcription.';
      console.error('Error in transcription process:', errorMessage);
      throw new Error(errorMessage);
    } finally {
      // Eliminar todos los archivos .m4a de la carpeta temp
      try {
        const files = fs.readdirSync(tempDir);
        files.forEach((file) => {
          if (file.endsWith('.m4a')) {
            fs.unlinkSync(path.join(tempDir, file));
          }
        });
        console.log('All .m4a files deleted from temp folder.');
      } catch (cleanupError) {
        console.error('Error cleaning up temp folder:', cleanupError);
      }
    }
  }

  // async downloadYouTubeVideo(videoIdOrUrl: string): Promise<string | null> {
  //   const tempDir = './temp';
  //   const videoFile = path.join(tempDir, `video_${Date.now()}.m4a`);
  //   console.log(
  //     '🚀 ~ TranscriptionVideosService ~ downloadYouTubeVideo ~ videoFile:',
  //     videoFile,
  //   );

  //   try {
  //     // Create temporary directory if it doesn't exist
  //     if (!fs.existsSync(tempDir)) {
  //       fs.mkdirSync(tempDir);
  //     }

  //     // Download the video using youtube-dl
  //     await youtubedl.youtubeDl(videoIdOrUrl, {
  //       format: '140',
  //       addHeader: ['referer:youtube.com', 'user-agent:googlebot'],
  //       output: videoFile,
  //       postprocessorArgs: '-ss 0 -t 120', // Start at 0:00 and limit to 2 minutes
  //     });

  //     return null;
  //     // Verify that the file was created
  //     if (!fs.existsSync(videoFile)) {
  //       throw new Error('Failed to download the video');
  //     }

  //     return videoFile;
  //   } catch (error) {
  //     console.error('Error downloading video:', error);
  //     throw error;
  //   }
  // }

  async downloadYouTubeVideo(videoIdOrUrl: string): Promise<string | null> {
    const tempDir = './temp';
    const videoFile = path.join(tempDir, `video_${Date.now()}.m4a`);
    const trimmedVideoFile = path.join(
      tempDir,
      `video_${Date.now()}_trimmed.m4a`,
    );
    console.log(
      '🚀 ~ TranscriptionVideosService ~ downloadYouTubeVideo ~ videoFile:',
      videoFile,
    );

    try {
      // Create temporary directory if it doesn't exist
      if (!fs.existsSync(tempDir)) {
        fs.mkdirSync(tempDir);
      }

      // Download the video using youtube-dl (descarga el archivo original)
      await youtubedl.youtubeDl(videoIdOrUrl, {
        format: '140',
        addHeader: ['referer:youtube.com', 'user-agent:googlebot'],
        output: videoFile,
        // Intentar limitar el tamaño de descarga (opcional), pero si falla proceder al recorte
        postprocessorArgs: '-ss 0 -t 120', // En este caso no se usará para el recorte final
      });

      if (!fs.existsSync(videoFile)) {
        throw new Error('Failed to download the video');
      }
      console.log(
        '🚀 ~ TranscriptionVideosService ~ downloadYouTubeVideo ~ videoFile:',
        videoFile,
      );

      // Recortar el video descargado a 3 minutos usando FFmpeg
      // Se requiere que FFmpeg esté instalado en el sistema
      try {
        execSync(
          `ffmpeg -y -i "${videoFile}" -ss 0 -t 180 -c copy "${trimmedVideoFile}"`,
        );
        console.log('Video trimmed successfully:', trimmedVideoFile);
        // Opcional: eliminar el archivo original no recortado
        fs.unlinkSync(videoFile);
        return trimmedVideoFile;
      } catch (ffmpegError) {
        console.error('Error trimming video with FFmpeg:', ffmpegError);
        throw new Error('Failed to trim the video');
      }
    } catch (error) {
      console.error('Error downloading video:', error);
      throw error;
    }
  }

  async transcription(videoUrl: string): Promise<string | null> {
    console.log(
      '🚀 ~ TranscriptionVideosService ~ transcription ~ videoUrl:',
      videoUrl,
    );
    try {
      // Step 1: Download the video using the downloadYouTubeVideo method
      const videoFile = await this.downloadYouTubeVideo(videoUrl);
      console.log(
        '🚀 ~ TranscriptionVideosService ~ transcription ~ videoFile:',
        videoFile,
      );

      if (!videoFile) {
        throw new Error('Failed to download video');
      }

      // Step 2: Transcribe the audio using OpenAI Whisper
      const transcription = await this.openai.audio.transcriptions.create({
        file: fs.createReadStream(videoFile),
        model: 'whisper-1',
        language: 'en',
        response_format: 'json',
      });

      console.log('Generated transcription:', transcription.text);

      // Return the transcription text
      return transcription.text;
    } catch (error) {
      console.error('Error in transcription process:', error);
      throw new Error('Failed to transcribe the video');
    }
  }

  async transcribeMultipleVideos(videoRequests: { videoId: string }[]) {
    // : Promise<{ videoId: string; transcription?: string; error?: string }[]>

    const results = await Promise.all(
      videoRequests.map(async (request) => {
        console.log(
          '🚀 ~ TranscriptionVideosService ~ transcribeMultipleVideos ~ request:',
          request,
        );
        try {
          const transcription = await this.transcription(
            `https://www.youtube.com/watch?v=${request.videoId}`,
          );
          return { videoId: request.videoId, transcription };
        } catch (error) {
          console.error(
            `Error transcribing video ${request.videoId}:`,
            error.message,
          );
          const errorMessage =
            error instanceof Error ? error.message : 'Unknown error';
          return { videoId: request.videoId, error: errorMessage };
        }
      }),
    );

    // Clean up temp folder
    const tempDir = './temp';
    try {
      const files = fs.readdirSync(tempDir);
      files.forEach((file) => {
        if (file.endsWith('.m4a')) {
          fs.unlinkSync(path.join(tempDir, file));
        }
      });
      console.log('All .m4a files deleted from temp folder.');
    } catch (cleanupError) {
      console.error('Error cleaning up temp folder:', cleanupError);
    }

    return results;
  }
}
