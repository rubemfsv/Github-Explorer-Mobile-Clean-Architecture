import { RemoteLoadUserRepositoryList } from "@/data/usecases/";
import { ILoadUserRepositoryToList } from "@/domain/usecases";
import { makeAxiosHttpClient, makeApiUrl } from "@/main/factories/http";

export const makeLoadUserRepositoryList = (): ILoadUserRepositoryToList => {
  const remoteLoadUserRepositoryList = new RemoteLoadUserRepositoryList(
    makeApiUrl("/auth"),
    makeAxiosHttpClient()
  );

  return remoteLoadUserRepositoryList;
};
