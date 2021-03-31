import { UserModel } from 'domain/models/';

export interface ILoadUserInfo {
  load: () => Promise<LoadUserInfo.Model>;
}

export namespace LoadUserInfo {
  export type Model = UserModel
}