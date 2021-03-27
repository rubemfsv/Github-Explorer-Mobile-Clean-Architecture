import { Authentication, IAuthentication } from '@/domain/usecases';
import faker from 'faker';
import { HttpResponseModel } from '../models';
import { mockAccountModel } from './MockAccount';
import { mockHttpResponseModel } from './MockHttpResponseModel';

export const mockAuthentication = (): Authentication.Params => ({
  email: faker.internet.email(),
  password: faker.internet.password(),
});

export const mockAuthenticationModel = (): Authentication.Model =>
  mockAccountModel();

export class AuthenticationSpy implements IAuthentication {
  account = mockAuthenticationModel();
  params: Authentication.Params;
  callsCount = 0;

  async auth(
    params: Authentication.Params
  ): Promise<HttpResponseModel<Authentication.Model>> {
    this.params = params;
    this.callsCount++;
    return mockHttpResponseModel(this.account);
  }
}
