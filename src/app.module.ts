import { Module } from '@nestjs/common';

import { DatabaseModule } from './database/database.module';

import { PostModule } from './post/post.module';

@Module({
  imports: [DatabaseModule, PostModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
