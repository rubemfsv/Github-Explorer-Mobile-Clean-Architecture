import { HttpResponseModel, UserModel } from '@/domain/models/';

export interface ILoadUsersToApproveList {
  loadAll: () => Promise<HttpResponseModel<UserModel[]>>;
}
