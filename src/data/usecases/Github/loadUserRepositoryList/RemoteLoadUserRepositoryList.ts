import { HttpStatusCode, IHttpClient } from '../../../protocols/http';
import { UnexpectedError } from '../../../../domain/errors';
import { RepositoryModel } from '../../../../domain/models';
import { ILoadUserRepositoryToList } from '../../../../domain/usecases/';

export class RemoteLoadUserRepositoryList implements ILoadUserRepositoryToList {
  constructor(
    private readonly url: string,
    private readonly httpGetClient: IHttpClient<RemoteLoadUserRepositoryList.Model[]>
  ) { }

  async loadAll(): Promise<RemoteLoadUserRepositoryList.Model[]> {
    const httpResponse = await this.httpGetClient.request({
      url: this.url,
      method: 'get',
    });
    const remoteRepositoryToLoad = httpResponse.body || [];

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return remoteRepositoryToLoad;
      case HttpStatusCode.noContent:
        return [];
      default:
        throw new UnexpectedError();
    }
  }
}

export namespace RemoteLoadUserRepositoryList {
  export type Model = RepositoryModel
}
