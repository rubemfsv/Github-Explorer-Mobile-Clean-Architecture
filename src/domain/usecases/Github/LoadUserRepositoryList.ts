import { RepositoryModel } from 'domain/models/';

export interface ILoadUserRepositoryToList {
  loadAll: () => Promise<LoadUserRepositoryToList.Model[]>;
}

export namespace LoadUserRepositoryToList {
  export type Model = RepositoryModel
}