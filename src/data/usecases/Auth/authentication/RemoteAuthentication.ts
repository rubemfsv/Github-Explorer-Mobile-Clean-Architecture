import { IHttpClient, HttpStatusCode } from '@/data/protocols/http';
import { InvalidCredentialsError, UnexpectedError } from '@/domain/errors';
import { HttpResponseModel } from '@/domain/models';
import { IAuthentication, Authentication } from '@/domain/usecases';

export class RemoteAuthentication implements IAuthentication {
  constructor(
    private readonly url: string,
    private readonly httpPostClient: IHttpClient<RemoteAuthenticationamespace.Model>
  ) {}

  async auth(
    params: Authentication.Params
  ): Promise<HttpResponseModel<RemoteAuthenticationamespace.Model>> {
    const httpResponse = await this.httpPostClient.request({
      url: this.url,
      method: 'post',
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

export namespace RemoteAuthenticationamespace {
  export type Model = Authentication.Model;
}
