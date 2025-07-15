import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import configuration from '../config/envs';

console.log(configuration().databaseUrl);

@Module({
  imports: [
    MongooseModule.forRoot(configuration().databaseUrl, {
      // dbName: 'feature-tech', // its optional if it is specified in the U
    }),
  ],
})
export class DatabaseModule {}
