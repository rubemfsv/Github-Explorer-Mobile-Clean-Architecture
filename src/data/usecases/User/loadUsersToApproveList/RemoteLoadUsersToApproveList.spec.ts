import { RemoteLoadUsersToApproveList } from './RemoteLoadUsersToApproveList';
import faker from 'faker';
import { HttpClientSpy } from '@/data/test';
import { HttpStatusCode } from '@/data/protocols/http';
import { AccessDeniedError, UnexpectedError } from '@/domain/errors';
import { UserModel } from '@/domain/models';
import { mockHttpResponseModel, mockUserListModel } from '@/domain/test';

type SutTypes = {
  sut: RemoteLoadUsersToApproveList;
  httpClientSpy: HttpClientSpy<UserModel[]>;
};

const makeSut = (url = faker.internet.url()): SutTypes => {
  const httpClientSpy = new HttpClientSpy<UserModel[]>();

  const sut = new RemoteLoadUsersToApproveList(url, httpClientSpy);

  return {
    sut,
    httpClientSpy,
  };
};

describe('LoadUsersToApproveList', () => {
  test('Should call HttpGetClient with correct URL', async () => {
    const url = faker.internet.url();
    const { sut, httpClientSpy } = makeSut(url);
    await sut.loadAll();
    expect(httpClientSpy.url).toBe(url);
  });

  test('Should return a list of UserModels if HttpGetClient returns 200', async () => {
    const { sut, httpClientSpy } = makeSut();
    const httpResult = mockUserListModel();
    httpClientSpy.response = {
      statusCode: HttpStatusCode.ok,
      // body: { data: httpResult },
      body: mockHttpResponseModel(httpResult),
    };
    const userList = await sut.loadAll();

    expect(userList).toEqual(httpResult);
  });

  test('Should return an empty list of UserModels if HttpGetClient returns 204', async () => {
    const { sut, httpClientSpy } = makeSut();
    httpClientSpy.response = {
      statusCode: HttpStatusCode.noContent,
    };
    const userList = await sut.loadAll();
    expect(userList).toEqual([]);
  });

  test('Should throw UnexpectedError if HttpGetClient returns 400', async () => {
    const { sut, httpClientSpy } = makeSut();
    httpClientSpy.response = {
      statusCode: HttpStatusCode.badRequest,
    };
    const promise = sut.loadAll();
    await expect(promise).rejects.toThrow(new UnexpectedError());
  });

  test('Should throw AccessDeniedError if HttpGetClient returns 401', async () => {
    const { sut, httpClientSpy } = makeSut();
    httpClientSpy.response = {
      statusCode: HttpStatusCode.unauthorized,
    };
    const promise = sut.loadAll();
    await expect(promise).rejects.toThrow(new AccessDeniedError());
  });

  test('Should throw UnexpectedError if HttpGetClient returns 404', async () => {
    const { sut, httpClientSpy } = makeSut();
    httpClientSpy.response = {
      statusCode: HttpStatusCode.notFound,
    };
    const promise = sut.loadAll();
    await expect(promise).rejects.toThrow(new UnexpectedError());
  });

  test('Should throw UnexpectedError if HttpPostClient returns 500', async () => {
    const { sut, httpClientSpy } = makeSut();
    httpClientSpy.response = {
      statusCode: HttpStatusCode.serverError,
    };
    const promise = sut.loadAll();

    await expect(promise).rejects.toThrow(new UnexpectedError());
  });
});
