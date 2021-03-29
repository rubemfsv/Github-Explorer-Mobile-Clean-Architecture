import { UserModel } from 'domain/models/';

export interface ILoadUserInfo {
  load: () => Promise<UserModel>;
}
