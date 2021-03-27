export type HttpResponseModel<T = unknown> = {
  statusCode: number;
  data: T | null;
  message: string;
  timestamp: number;
};
