import { HttpStatusCode, IHttpClient } from '../../../protocols/http';
import { UnexpectedError } from '../../../../domain/errors';
import { GistModel } from '../../../../domain/models';
import { ILoadUserGistList } from '../../../../domain/usecases';

export class RemoteLoadUserGistList implements ILoadUserGistList {
  constructor(
    private readonly url: string,
    private readonly httpGetClient: IHttpClient<RemoteLoadUserGistList.Model[]>
  ) { }

  async loadAll(): Promise<RemoteLoadUserGistList.Model[]> {
    const httpResponse = await this.httpGetClient.request({
      url: this.url,
      method: 'get',
    });
    const remoteGistToLoad = httpResponse.body || [];

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return remoteGistToLoad;
      case HttpStatusCode.noContent:
        return [];
      default:
        throw new UnexpectedError();
    }
  }
}

export namespace RemoteLoadUserGistList {
  export type Model = GistModel
}
