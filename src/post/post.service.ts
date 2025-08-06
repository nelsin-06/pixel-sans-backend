import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PaginationQueryDto } from './dto/pagination-query.dto';
import { PaginatedResponseDto } from './dto/paginated-response.dto';
import { Post } from './schema/post.schema';
import { Model, FilterQuery } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class PostService {
  constructor(
    @InjectModel(Post.name)
    private readonly postModel: Model<Post>,
  ) {}

  create(createPostDto: CreatePostDto) {
    try {
      const createdPost = new this.postModel(createPostDto);
      return createdPost.save();
    } catch (error) {
      console.log('🚀 ~ PostService ~ create ~ error:', error);
      return null;
    }
  }

  findAll() {
    return this.postModel.find().exec();
  }

  private calculateSimilarity(str1: string, str2: string): number {
    const longer = str1.length > str2.length ? str1 : str2;
    const shorter = str1.length > str2.length ? str2 : str1;
    const longerLength = longer.length;

    if (longerLength === 0) {
      return 1.0;
    }

    const editDistance = (a: string, b: string): number => {
      const matrix: number[][] = Array.from({ length: a.length + 1 }, () =>
        Array<number>(b.length + 1).fill(0),
      );

      for (let i = 0; i <= a.length; i++) {
        for (let j = 0; j <= b.length; j++) {
          if (i === 0) {
            matrix[i][j] = j;
          } else if (j === 0) {
            matrix[i][j] = i;
          } else if (a[i - 1] === b[j - 1]) {
            matrix[i][j] = matrix[i - 1][j - 1];
          } else {
            matrix[i][j] =
              1 +
              Math.min(
                matrix[i - 1][j],
                matrix[i][j - 1],
                matrix[i - 1][j - 1],
              );
          }
        }
      }

      return matrix[a.length][b.length];
    };

    return (longerLength - editDistance(longer, shorter)) / longerLength;
  }

  async findAllPaginated(
    paginationQuery: PaginationQueryDto,
  ): Promise<PaginatedResponseDto<Post>> {
    const {
      page = 1,
      pageSize = 10,
      category = 'all',
      title,
    } = paginationQuery;
    const skip = (page - 1) * pageSize;

    const filter: FilterQuery<Post> = {};

    // Handle title filtering with flexible keyword matching
    if (title) {
      // Split the search term by spaces and create a regex that matches any of the keywords
      const keywords = title.trim().split(/\s+/);
      const keywordPattern = keywords
        .map(
          (keyword) => keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), // Escape special regex characters
        )
        .join('|'); // Join with OR operator
      filter.title = { $regex: keywordPattern, $options: 'i' };
    }

    // Handle category filtering with flexible keyword matching
    if (category !== 'all') {
      // Split the search term by spaces and create a regex that matches any of the keywords
      const keywords = category.trim().split(/\s+/);
      const keywordPattern = keywords
        .map(
          (keyword) => keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), // Escape special regex characters
        )
        .join('|'); // Join with OR operator
      filter.category = { $regex: keywordPattern, $options: 'i' };
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

  findOne(id: string) {
    return this.postModel.findById(id).exec();
  }

  update(id: string, updatePostDto: UpdatePostDto) {
    return this.postModel
      .findByIdAndUpdate(id, updatePostDto, { new: true })
      .exec();
  }

  remove(id: string) {
    return this.postModel.findByIdAndDelete(id).exec();
  }
}
