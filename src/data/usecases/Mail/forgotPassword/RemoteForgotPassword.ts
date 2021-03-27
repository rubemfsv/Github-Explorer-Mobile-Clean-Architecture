import { IHttpClient, HttpStatusCode } from '@/data/protocols/http';
import { IForgotPassword, ForgotPassword } from '@/domain/usecases';
import { UnexpectedError } from '@/domain/errors';
import { HttpResponseModel } from '@/domain/models';

export class RemoteForgotPassword implements IForgotPassword {
  constructor(
    private readonly url: string,
    private readonly httpPostClient: IHttpClient<RemoteForgotPasswordNamespace.Model>
  ) {}

  async forgot(
    params: ForgotPassword.Params
  ): Promise<HttpResponseModel<ForgotPassword.Model>> {
    const httpResponse = await this.httpPostClient.request({
      url: this.url,
      method: 'post',
      body: params,
    });

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return httpResponse.body;
      case HttpStatusCode.created:
        return httpResponse.body;
      default:
        throw new UnexpectedError(httpResponse.body.message);
    }
  }
}

export namespace RemoteForgotPasswordNamespace {
  export type Model = ForgotPassword.Model;
}
