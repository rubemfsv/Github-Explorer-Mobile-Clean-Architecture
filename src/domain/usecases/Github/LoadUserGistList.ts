import { GistModel } from 'domain/models/';

export interface ILoadUserGistList {
  loadAll: () => Promise<GistModel[]>;
}
