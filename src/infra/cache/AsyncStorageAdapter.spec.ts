import { AsyncStorageAdapter } from './AsyncStorageAdapter';
import faker from 'faker';
import MockAsyncStorage from 'mock-async-storage'

// Tive problemas com os testes mocando o asyncStorage 

const makeSut = (): AsyncStorageAdapter => new AsyncStorageAdapter();

describe('AsyncStorageAdapter', () => {
  beforeEach(() => {
    MockAsyncStorage.clear();
  });

  test('Should call MockAsyncStorage.setItems with correct values', () => {
    const sut = makeSut();
    const key = faker.database.column();
    const value = faker.random.objectElement<{}>();
    sut.set(key, value);
    expect(MockAsyncStorage.setItem).toHaveBeenCalledWith(
      key,
      JSON.stringify(value)
    );
  });

  // test('Should call MockAsyncStorage.removeItems with values is null', () => {
  //   const sut = makeSut();
  //   const key = faker.database.column();
  //   sut.set(key, undefined);
  //   expect(MockAsyncStorage.removeItem).toHaveBeenCalledWith(key);
  // });

  test('Should call MockAsyncStorage.getItem with correct value', () => {
    const sut = makeSut();
    const key = faker.database.column();
    const value = faker.random.objectElement<{}>();
    const getItemSpy = jest
      .spyOn(MockAsyncStorage, 'getItem')
      .mockReturnValueOnce(JSON.stringify(value));
    const obj = sut.get(key);
    expect(getItemSpy).toHaveBeenCalledWith(key);
    expect(obj).toEqual(value);
  });
});
