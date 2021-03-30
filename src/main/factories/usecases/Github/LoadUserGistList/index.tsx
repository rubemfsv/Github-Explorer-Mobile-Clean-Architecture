import { RemoteLoadUserGistList } from "../../../../../data/usecases";
import { ILoadUserGistList } from "../../../../../domain/usecases";
import { makeAxiosHttpClient, makeApiUrl } from "../../../http";

export const makeLoadUserGistList = (user: string): ILoadUserGistList => {
  const remoteLoadUserGistList = new RemoteLoadUserGistList(
    makeApiUrl(`/users/${user}/gists`),
    makeAxiosHttpClient()
  );

  return remoteLoadUserGistList;
};
