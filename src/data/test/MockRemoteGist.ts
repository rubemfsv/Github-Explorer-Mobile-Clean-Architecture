import { RemoteLoadUserGistList } from '../usecases'

import faker from 'faker'

export const mockRemoteGist = (): RemoteLoadUserGistList.Model => ({
  id: faker.random.uuid(),
  url: faker.internet.url(),
  forks_url: faker.internet.url(),
  commits_url: faker.internet.url(),
  node_id: faker.random.uuid(),
  git_pull_url: faker.internet.url(),
  git_push_url: faker.internet.url(),
  html_url: faker.internet.url(),
  files: faker.random.objectElement(),
  public: faker.random.boolean(),
  created_at: faker.date.recent().toISOString(),
  updated_at: faker.date.recent().toISOString(),
  description: faker.random.words(),
  comments: faker.random.number(),
  user: faker.name.findName(),
  comments_url: faker.internet.url(),
  owner: {
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
  },
  truncated: faker.random.boolean()
})

export const mockRemoteGistListModel = (): RemoteLoadUserGistList.Model[] => ([
  mockRemoteGist(),
  mockRemoteGist(),
  mockRemoteGist()
])