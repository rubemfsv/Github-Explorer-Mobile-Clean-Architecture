import { UserModel } from 'domain/models/';

export interface ILoadUserFollowersList {
  loadAll: () => Promise<LoadUserFollowersList.Model[]>;
}

export namespace LoadUserFollowersList {
  export type Model = UserModel
}