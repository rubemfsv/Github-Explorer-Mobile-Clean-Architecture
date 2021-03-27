import { HttpResponseModel, UserModel } from '@/domain/models/';

export interface IEditAccount {
  edit: (
    params: EditAccount.Params
  ) => Promise<HttpResponseModel<EditAccount.Model>>;
}

export namespace EditAccount {
  export type Params = {
    first_name: string;
    last_name: string;
    cpf: string;
    email: string;
    role?: string;
    isActive?: string;
    capabilities?: any[];
  };

  export type Model = UserModel;
}
