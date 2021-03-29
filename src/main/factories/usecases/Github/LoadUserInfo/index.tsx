import { RemoteLoadUserInfo } from "../../../../../data/usecases/";
import { ILoadUserInfo } from "../../../../../domain/usecases";
import { makeAxiosHttpClient, makeApiUrl } from "../../../http";

export const makeLoadUserInfo = (user: string): ILoadUserInfo => {
  const remoteLoadUserInfo = new RemoteLoadUserInfo(
    makeApiUrl(`/users/${user}`),
    makeAxiosHttpClient()
  );

  return remoteLoadUserInfo;
};
