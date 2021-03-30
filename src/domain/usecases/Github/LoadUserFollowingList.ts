import { UserModel } from 'domain/models/';

export interface ILoadUserFollowingList {
  loadAll: () => Promise<UserModel[]>;
}
