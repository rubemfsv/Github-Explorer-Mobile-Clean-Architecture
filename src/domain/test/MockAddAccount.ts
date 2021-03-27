import { AddAccount, IAddAccount } from '@/domain/usecases';
import faker from 'faker';
import { HttpResponseModel } from '../models';
import { mockAccountModel } from './MockAccount';
import { mockHttpResponseModel } from './MockHttpResponseModel';

export const mockAddAccount = (): AddAccount.Params => {
  const password = faker.internet.password();
  return {
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
    email: faker.internet.email(),
    cpf: faker.random.alphaNumeric(8),
    password: password,
    passwordConfirmation: password,
  };
};

export const mockAddAccountModel = (): AddAccount.Model => mockAccountModel();

export class AddAccountSpy implements IAddAccount {
  account = mockAddAccountModel();
  params: AddAccount.Params;
  callsCount = 0;

  async add(
    params: AddAccount.Params
  ): Promise<HttpResponseModel<AddAccount.Model>> {
    this.params = params;
    this.callsCount++;
    return mockHttpResponseModel(this.account);
  }
}
