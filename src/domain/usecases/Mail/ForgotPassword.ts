import { HttpResponseModel } from '@/domain/models/';

export interface IForgotPassword {
  forgot: (
    params: ForgotPassword.Params
  ) => Promise<HttpResponseModel<ForgotPassword.Model>>;
}

export namespace ForgotPassword {
  export type Params = {
    email: string;
  };

  export type Model = {
    statusCode: number;
    message: string;
    data: string;
    timestamp: string;
  };
}
