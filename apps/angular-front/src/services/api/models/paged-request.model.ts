export interface PagedRequest {
  pageNumber: number;
  pageSize: number;
}

export const defaultPagedRequest: PagedRequest = {
  pageNumber: 1,
  pageSize: 15,
};
