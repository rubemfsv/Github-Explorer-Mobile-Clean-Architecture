import { HttpStatusCode, IHttpClient } from '../../../protocols/http';
import { AccessDeniedError, UnexpectedError } from '../../../../domain/errors';
import { UserModel } from '../../../../domain/models';
import { ILoadUserInfo } from '../../../../domain/usecases';

export class RemoteLoadUserInfo implements ILoadUserInfo {
  constructor(
    private readonly url: string,
    private readonly httpGetClient: IHttpClient<UserModel>
  ) { }

  async load(): Promise<UserModel> {
    const httpResponse = await this.httpGetClient.request({
      url: this.url,
      method: 'get',
    });
    const remoteUserInfo = httpResponse.body;

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return remoteUserInfo;
      case HttpStatusCode.noContent:
        return httpResponse.body || null;
      case HttpStatusCode.unauthorized:
        throw new AccessDeniedError();
      default:
        throw new UnexpectedError();
    }
  }
}
