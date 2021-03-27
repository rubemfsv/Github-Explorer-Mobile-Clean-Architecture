import { HttpStatusCode, IHttpClient } from '@/data/protocols/http';
import { AccessDeniedError, UnexpectedError } from '@/domain/errors';
import { HttpResponseModel, UserModel } from '@/domain/models';
import { ILoadUsersToApproveList } from '@/domain/usecases/';

export class RemoteLoadUsersToApproveList implements ILoadUsersToApproveList {
  constructor(
    private readonly url: string,
    private readonly httpGetClient: IHttpClient<UserModel[]>
  ) {}

  async loadAll(): Promise<HttpResponseModel<UserModel[]>> {
    const httpResponse = await this.httpGetClient.request({
      url: this.url,
      method: 'get',
    });
    const remoteUsersToApprove = httpResponse.body;

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return remoteUsersToApprove;
      case HttpStatusCode.noContent:
        return httpResponse.body || null;
      case HttpStatusCode.unauthorized:
        throw new AccessDeniedError();
      default:
        throw new UnexpectedError(httpResponse.body.message);
    }
  }
}
