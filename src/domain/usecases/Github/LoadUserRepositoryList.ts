import { RepositoryModel } from 'domain/models/';

export interface ILoadUserRepositoryToList {
  loadAll: () => Promise<RepositoryModel[]>;
}
