import { IHttpClient, HttpStatusCode } from '@/data/protocols/http';
import { IEditAccount, EditAccount } from '@/domain/usecases';
import { UnexpectedError } from '@/domain/errors';
import { HttpResponseModel } from '@/domain/models';

export class RemoteEditAccount implements IEditAccount {
  constructor(
    private readonly url: string,
    private readonly httpClient: IHttpClient<RemoteEditAccountNamespace.Model>
  ) {}

  async edit(
    params: EditAccount.Params
  ): Promise<HttpResponseModel<EditAccount.Model>> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'put',
      body: params,
    });

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return httpResponse.body;
      default:
        throw new UnexpectedError(httpResponse.body.message);
    }
  }
}

export namespace RemoteEditAccountNamespace {
  export type Model = EditAccount.Model;
}
