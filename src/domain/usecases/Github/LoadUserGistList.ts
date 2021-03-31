import { GistModel } from 'domain/models/';

export interface ILoadUserGistList {
  loadAll: () => Promise<LoadUserGistList.Model[]>;
}

export namespace LoadUserGistList {
  export type Model = GistModel
}