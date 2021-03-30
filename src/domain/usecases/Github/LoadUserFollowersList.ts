import { UserModel } from 'domain/models/';

export interface ILoadUserFollowersList {
  loadAll: () => Promise<UserModel[]>;
}
