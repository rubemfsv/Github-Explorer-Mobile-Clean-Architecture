import { AccountModel, HttpResponseModel } from '@/domain/models/';

export interface IAuthentication {
  auth(
    params: Authentication.Params
  ): Promise<HttpResponseModel<Authentication.Model>>;
}

export namespace Authentication {
  export type Params = {
    email: string;
    password: string;
  };

  export type Model = AccountModel;
}
