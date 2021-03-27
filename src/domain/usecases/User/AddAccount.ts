import { AccountModel, HttpResponseModel } from '@/domain/models/';

export interface IAddAccount {
  add: (
    params: AddAccount.Params
  ) => Promise<HttpResponseModel<AddAccount.Model>>;
}

export namespace AddAccount {
  export type Params = {
    first_name: string;
    last_name: string;
    email: string;
    cpf: string;
    password: string;
    passwordConfirmation: string;
  };

  export type Model = AccountModel;
}
