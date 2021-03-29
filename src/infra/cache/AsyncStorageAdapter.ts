import { IGetStorage } from '../../data/protocols/cache/getStorage';
import { ISetStorage } from '../../data/protocols/cache/SetStorage';
import AsyncStorage from '@react-native-community/async-storage';

export class AsyncStorageAdapter implements ISetStorage, IGetStorage {
  set(key: string, value: object): void {
    if (value) {
      AsyncStorage.setItem(key, JSON.stringify(value));
    } else {
      AsyncStorage.removeItem(key);
    }
  }

  get(key: string): any {
    return JSON.parse(AsyncStorage.getItem(key));
  }
}
