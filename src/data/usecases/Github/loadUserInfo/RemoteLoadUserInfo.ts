import { HttpStatusCode, IHttpClient } from '../../../protocols/http';
import { UnexpectedError } from '../../../../domain/errors';
import { ILoadUserInfo } from '../../../../domain/usecases';
import { UserModel } from '@/domain/models';

export class RemoteLoadUserInfo implements ILoadUserInfo {
  constructor(
    private readonly url: string,
    private readonly httpGetClient: IHttpClient<RemoteLoadUserInfo.Model>
  ) { }

  async load(): Promise<RemoteLoadUserInfo.Model> {
    const httpResponse = await this.httpGetClient.request({
      url: this.url,
      method: 'get',
    });

    const remoteUserInfo: any = httpResponse.body;

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return remoteUserInfo;
      default:
        throw new UnexpectedError();
    }
  }
}

export namespace RemoteLoadUserInfo {
  export type Model = UserModel;
}
