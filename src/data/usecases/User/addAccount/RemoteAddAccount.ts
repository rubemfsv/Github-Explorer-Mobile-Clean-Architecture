import { IHttpClient, HttpStatusCode } from '@/data/protocols/http';
import { IAddAccount, AddAccount } from '@/domain/usecases';
import { EmailInUseError, UnexpectedError } from '@/domain/errors';
import { HttpResponseModel } from '@/domain/models';

export class RemoteAddAccount implements IAddAccount {
  constructor(
    private readonly url: string,
    private readonly httpPostClient: IHttpClient<RemoteAddAccountNamespace.Model>
  ) {}

  async add(
    params: AddAccount.Params
  ): Promise<HttpResponseModel<AddAccount.Model>> {
    const httpResponse = await this.httpPostClient.request({
      url: this.url,
      method: 'post',
      body: params,
    });

    switch (httpResponse.statusCode) {
      case HttpStatusCode.created:
        return httpResponse.body;
      default:
        throw new UnexpectedError(httpResponse.body.message);
    }
  }
}

export namespace RemoteAddAccountNamespace {
  export type Model = AddAccount.Model;
}
