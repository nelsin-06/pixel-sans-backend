/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiResponse } from '../dto/api-response.dto';

@Injectable()
export class ResponseInterceptor<T>
  implements NestInterceptor<T, ApiResponse<T>>
{
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<ApiResponse<T>> {
    const request = context.switchToHttp().getRequest();
    return next.handle().pipe(
      map((data) => {
        if (
          data &&
          typeof data === 'object' &&
          'success' in data &&
          'message' in data &&
          'timestamp' in data &&
          'path' in data
        ) {
          // Opcional: actualiza path y timestamp si quieres que siempre sean correctos
          return {
            ...data,
            path: request?.url,
            timestamp: new Date().toISOString(),
          };
        }

        return {
          success: true,
          message: 'Operation completed successfully',
          data,
          timestamp: new Date().toISOString(),
          path: request?.url,
        };
      }),
    );
  }
}
