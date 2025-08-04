import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { PostInterface, SeccionesInterface } from '../entities/post.entity';

@Schema({ timestamps: true, versionKey: false })
export class Post implements PostInterface {
  @Prop({
    set: (value: string) => value?.toLowerCase(),
    required: true,
    trim: true,
  })
  title: string;

  @Prop({ required: true })
  secciones: SeccionesInterface[];

  @Prop({ default: true })
  active: boolean;

  @Prop({ type: String, required: true })
  category: string;

  @Prop({ type: String, default: null })
  image?: string;

  @Prop({ type: String, required: true, default: null })
  youtubeChannelName: string;
}

export const PostSchema = SchemaFactory.createForClass(Post);
