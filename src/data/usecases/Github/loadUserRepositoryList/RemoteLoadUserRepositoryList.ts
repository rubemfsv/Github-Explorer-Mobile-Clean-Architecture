import { HttpStatusCode, IHttpClient } from '../../../protocols/http';
import { UnexpectedError } from '../../../../domain/errors';
import { RepositoryModel } from '../../../../domain/models';
import { ILoadUserRepositoryToList } from '../../../../domain/usecases/';

export class RemoteLoadUserRepositoryList implements ILoadUserRepositoryToList {
  constructor(
    private readonly url: string,
    private readonly httpGetClient: IHttpClient<RepositoryModel[]>
  ) { }

  async loadAll(): Promise<RepositoryModel[]> {
    const httpResponse = await this.httpGetClient.request({
      url: this.url,
      method: 'get',
    });
    const remoteRepositoryToLoad = httpResponse.body;

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return remoteRepositoryToLoad;
      case HttpStatusCode.noContent:
        return httpResponse.body || null;
      default:
        throw new UnexpectedError();
    }
  }
}
