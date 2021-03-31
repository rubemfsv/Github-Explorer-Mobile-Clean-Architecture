import { UserModel } from 'domain/models/';

export interface ILoadUserFollowingList {
  loadAll: () => Promise<LoadUserFollowingList.Model[]>;
}

export namespace LoadUserFollowingList {
  export type Model = UserModel
}