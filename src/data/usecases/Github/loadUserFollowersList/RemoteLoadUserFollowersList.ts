import { HttpStatusCode, IHttpClient } from '../../../protocols/http';
import { UnexpectedError } from '../../../../domain/errors';
import { ILoadUserFollowersList } from '../../../../domain/usecases';

export class RemoteLoadUserFollowersList implements ILoadUserFollowersList {
  constructor(
    private readonly url: string,
    private readonly httpGetClient: IHttpClient<RemoteLoadUserFollowersList.Model[]>
  ) { }

  async loadAll(): Promise<RemoteLoadUserFollowersList.Model[]> {
    const httpResponse = await this.httpGetClient.request({
      url: this.url,
      method: 'get',
    });
    const remoteRepositoryToLoad = httpResponse.body || [];

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return remoteRepositoryToLoad;
      case HttpStatusCode.noContent:
        return [];
      default:
        throw new UnexpectedError();
    }
  }
}

export namespace RemoteLoadUserFollowersList {
  export type Model = {
    login: string,
    id?: number,
    node_id?: string,
    avatar_url?: string,
    gravatar_id?: string,
    url?: string,
    html_url?: string,
    followers_url?: string,
    following_url?: string,
    gists_url?: string,
    starred_url?: string,
    subscriptions_url?: string,
    organizations_url?: string,
    repos_url?: string,
    events_url?: string,
    received_events_url?: string,
    type?: string,
    site_admin?: boolean,
    name?: string,
    company?: string,
    blog?: string,
    location?: string,
    email?: string,
    hireable?: boolean,
    bio?: string,
    twitter_username?: string,
    public_repos?: number,
    public_gists?: number,
    followers?: number,
    following?: number,
    created_at?: string,
    updated_at?: string,
    pushed_at?: string,
  }
}
