import { UserModel } from './UserModel';

export type AccountModel = {
  accessToken: string;
  user: UserModel;
};
