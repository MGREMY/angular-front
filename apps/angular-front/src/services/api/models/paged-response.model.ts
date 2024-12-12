export interface PagedResponse<T> {
  pageNumber: number;
  pageSize: number;
  hasNextPage: boolean;
  hasPeviousPage: boolean;
  totalPages: number;
  data: T[];
}
