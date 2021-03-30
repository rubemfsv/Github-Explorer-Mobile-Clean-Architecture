import { RemoteLoadUserFollowingList } from "../../../../../data/usecases";
import { ILoadUserFollowingList } from "../../../../../domain/usecases";
import { makeAxiosHttpClient, makeApiUrl } from "../../../http";

export const makeLoadUserFollowingList = (
  user: string
): ILoadUserFollowingList => {
  const remoteLoadUserFollowingList = new RemoteLoadUserFollowingList(
    makeApiUrl(`/users/${user}/following`),
    makeAxiosHttpClient()
  );

  return remoteLoadUserFollowingList;
};
