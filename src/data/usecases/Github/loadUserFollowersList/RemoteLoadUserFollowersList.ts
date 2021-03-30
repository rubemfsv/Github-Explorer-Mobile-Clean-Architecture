import { HttpStatusCode, IHttpClient } from '../../../protocols/http';
import { UnexpectedError } from '../../../../domain/errors';
import { UserModel } from '../../../../domain/models';
import { ILoadUserFollowersList } from '../../../../domain/usecases';

export class RemoteLoadUserFollowersList implements ILoadUserFollowersList {
  constructor(
    private readonly url: string,
    private readonly httpGetClient: IHttpClient<UserModel[]>
  ) { }

  async loadAll(): Promise<UserModel[]> {
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
