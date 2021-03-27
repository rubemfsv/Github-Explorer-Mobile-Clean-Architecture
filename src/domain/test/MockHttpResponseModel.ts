import { HttpResponseModel } from '../models';

export const mockHttpResponseModel = <T = unknown>(
  data: T,
  message = 'OK',
  statusCode = 200,
  timestamp = Date.now()
): HttpResponseModel<T> => ({
  data,
  message,
  statusCode,
  timestamp,
});
