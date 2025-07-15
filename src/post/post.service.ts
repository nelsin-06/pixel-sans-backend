import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PaginationQueryDto } from './dto/pagination-query.dto';
import { PaginatedResponseDto } from './dto/paginated-response.dto';
import { Post } from './schema/categoria-productos.schema';
import { Model, FilterQuery } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class PostService {
  constructor(
    @InjectModel(Post.name)
    private readonly postModel: Model<Post>,
  ) {}

  create(createPostDto: CreatePostDto) {
    const createdPost = new this.postModel(createPostDto);
    return createdPost.save();
  }

  findAll() {
    return this.postModel.find().exec();
  }

  async findAllPaginated(
    paginationQuery: PaginationQueryDto,
  ): Promise<PaginatedResponseDto<Post>> {
    const { page = 1, pageSize = 10, category = 'all' } = paginationQuery;
    const skip = (page - 1) * pageSize;

    // Construir el filtro de consulta
    const filter: FilterQuery<Post> = {};
    if (category !== 'all') {
      filter.category = { $regex: new RegExp(category, 'i') };
    }

    const [items, totalItems] = await Promise.all([
      this.postModel
        .find(filter)
        .skip(skip)
        .limit(pageSize)
        .sort({ createdAt: -1 })
        .exec(),
      this.postModel.countDocuments(filter).exec(),
    ]);

    return new PaginatedResponseDto(items, totalItems, page, pageSize);
  }

  findOne(id: number) {
    return this.postModel.findById(id).exec();
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return this.postModel.findByIdAndUpdate(id, updatePostDto).exec();
  }

  remove(id: number) {
    return this.postModel.findByIdAndDelete(id).exec();
  }
}
