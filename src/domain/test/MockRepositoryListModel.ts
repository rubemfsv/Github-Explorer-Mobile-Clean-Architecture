import { RepositoryModel } from '../models';
import faker from 'faker';

export const mockRepositoryListModel = (): RepositoryModel[] => [
  // {
  //   id: faker.random.uuid(),
  //   first_name: faker.name.firstName(),
  //   last_name: faker.name.lastName(),
  //   email: faker.internet.email(),
  //   cpf: faker.random.alphaNumeric(11),
  //   password: faker.internet.password(),
  //   role: faker.random.words(1),
  //   isCustomCapabilities: faker.random.boolean(),
  //   isActive: faker.random.arrayElement(['inactive', 'active', 'blocked']),
  //   capabilities: [
  //     { capability: faker.random.words(5) },
  //     { capability: faker.random.words(5) },
  //   ],
  // },
];
