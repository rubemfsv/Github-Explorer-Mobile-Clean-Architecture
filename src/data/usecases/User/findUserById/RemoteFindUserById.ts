import { IHttpClient, HttpStatusCode } from '@/data/protocols/http';
import {
  FindUserById,
  IFindUserById,
} from '@/domain/usecases';
import { UnexpectedError } from '@/domain/errors';
import { HttpResponseModel } from '@/domain/models';

export class RemoteFindUserById implements IFindUserById {
  constructor(
    private readonly url: string,
    private readonly httpPostClient: IHttpClient<RemoteFindUserByIdNamespace.Model>
  ) {}

  async find(): Promise<HttpResponseModel<FindUserById.Model>> {
    const httpResponse = await this.httpPostClient.request({
      url: this.url,
      method: 'get',
    });

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return httpResponse.body;
      default:
        throw new UnexpectedError(httpResponse.body.message);
    }
  }
}

export namespace RemoteFindUserByIdNamespace {
  export type Model = FindUserById.Model;
}
