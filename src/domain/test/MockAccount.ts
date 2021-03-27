import faker from 'faker';
import { AccountModel } from '../models';

export const mockAccountModel = (): AccountModel => ({
  accessToken: faker.random.uuid(),
  user: {
    id: faker.random.uuid(),
    first_name: faker.name.firstName(),
    last_name: faker.name.lastName(),
    email: faker.internet.email(),
    cpf: faker.random.alphaNumeric(8),
    password: faker.internet.password(),
    role: faker.random.word(),
    isCustomCapabilities: faker.random.boolean(),
    isActive: faker.random.arrayElement(['inactive', 'active', 'blocked']),
    capabilities: [
      { capability: faker.random.words(5) },
      { capability: faker.random.words(5) },
    ],
  },
});
