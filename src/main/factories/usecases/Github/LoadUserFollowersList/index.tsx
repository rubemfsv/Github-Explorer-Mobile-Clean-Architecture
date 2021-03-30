import { RemoteLoadUserFollowersList } from "../../../../../data/usecases";
import { ILoadUserFollowersList } from "../../../../../domain/usecases";
import { makeAxiosHttpClient, makeApiUrl } from "../../../http";

export const makeLoadUserFollowersList = (
  user: string
): ILoadUserFollowersList => {
  const remoteLoadUserFollowersList = new RemoteLoadUserFollowersList(
    makeApiUrl(`/users/${user}/followers`),
    makeAxiosHttpClient()
  );

  return remoteLoadUserFollowersList;
};
