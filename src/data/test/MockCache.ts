import { IGetStorage } from '../protocols/cache/getStorage';
export class GetStorageSpy implements IGetStorage {
  key: string;
  value: any;
  get(key: string): any {
    this.key = key;

    return this.value;
  }
}
