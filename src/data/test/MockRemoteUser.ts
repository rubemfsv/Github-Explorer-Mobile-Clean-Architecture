import { RemoteLoadUserFollowersList } from '../usecases'

import faker from 'faker'

export const mockRemoteUser = (): RemoteLoadUserFollowersList.Model => ({
  id: faker.random.number(),
  login: faker.random.word(),
  node_id: faker.random.uuid(),
  avatar_url: faker.internet.avatar(),
  gravatar_id: faker.random.uuid(),
  url: faker.internet.url(),
  html_url: faker.internet.url(),
  followers_url: faker.internet.url(),
  following_url: faker.internet.url(),
  gists_url: faker.internet.url(),
  starred_url: faker.internet.url(),
  subscriptions_url: faker.internet.url(),
  organizations_url: faker.internet.url(),
  repos_url: faker.internet.url(),
  events_url: faker.internet.url(),
  received_events_url: faker.internet.url(),
  type: faker.random.word(),
  site_admin: faker.random.boolean(),
  name: faker.name.findName(),
  company: faker.commerce.department(),
  blog: faker.internet.url(),
  location: faker.address.city(),
  email: faker.internet.email(),
  hireable: faker.random.boolean(),
  bio: faker.name.jobArea(),
  twitter_username: faker.internet.userName(),
  public_repos: faker.random.number(),
  public_gists: faker.random.number(),
  followers: faker.random.number(),
  following: faker.random.number(),
  created_at: faker.date.recent().toISOString(),
  updated_at: faker.date.recent().toISOString(),
  pushed_at: faker.date.recent().toISOString(),
})

export const mockRemoteUserListModel = (): RemoteLoadUserFollowersList.Model[] => ([
  mockRemoteUser(),
  mockRemoteUser(),
  mockRemoteUser()
])