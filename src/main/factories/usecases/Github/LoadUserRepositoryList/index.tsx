import { RemoteLoadUserRepositoryList } from "../../../../../data/usecases/";
import { ILoadUserRepositoryToList } from "../../../../../domain/usecases";
import { makeAxiosHttpClient, makeApiUrl } from "../../../http";

export const makeLoadUserRepositoryList = (
  user: string
): ILoadUserRepositoryToList => {
  const remoteLoadUserRepositoryList = new RemoteLoadUserRepositoryList(
    makeApiUrl(`/users/${user}/repos`),
    makeAxiosHttpClient()
  );

  return remoteLoadUserRepositoryList;
};
