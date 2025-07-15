export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
  errors?: any;
  timestamp: string;
  path: string;
}

// export class BaseResponseDto<T = any> implements ApiResponse<T> {
//   success: boolean;
//   message: string;
//   data?: T;
//   errors?: any;
//   timestamp: string;
//   path: string;

//   constructor(data?: T, message = 'Success', success = true, path = '') {
//     this.success = success;
//     this.message = message;
//     this.data = data;
//     this.timestamp = new Date().toISOString();
//     this.path = path;
//   }
// }
