import { UserModel, HttpResponseModel } from '@/domain/models/';

export interface IFindUserById {
  find: () => Promise<HttpResponseModel<FindUserById.Model>>;
}
export namespace FindUserById {
  export type Model = UserModel;
}
