export class PaginatedResponseDto<T> {
  page: number;
  pageSize: number;
  totalPages: number;
  totalItems: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
  items: T[];

  constructor(items: T[], totalItems: number, page: number, pageSize: number) {
    this.items = items;
    this.totalItems = totalItems;
    this.page = page;
    this.pageSize = pageSize;
    this.totalPages = Math.ceil(totalItems / pageSize);
    this.hasNextPage = page < this.totalPages;
    this.hasPrevPage = page > 1;
  }
}
