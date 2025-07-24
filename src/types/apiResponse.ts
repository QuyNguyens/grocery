export interface ApiResponse<T = unknown> {
  success: boolean;
  message: string;
  data: T;
  meta: PaginatedMeta;
}

export interface PaginatedMeta {
  page: number;
  limit: number;
  total: number;
  [key: string]: any;
}
