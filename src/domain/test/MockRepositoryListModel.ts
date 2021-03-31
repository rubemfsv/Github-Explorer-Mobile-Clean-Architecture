import { ILoadUserRepositoryToList, LoadUserRepositoryToList } from '@/domain/usecases'

import faker from 'faker'

export const mockRepositoryModel = (): LoadUserRepositoryToList.Model => ({
  id: faker.random.number(),
  node_id: faker.random.uuid(),
  name: faker.name.firstName(),
  full_name: faker.name.findName(),
  private: faker.random.boolean(),
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
  html_url: faker.internet.url(),
  description: faker.random.words(),
  fork: faker.random.boolean(),
  url: faker.internet.url(),
  forks_url: faker.internet.url(),
  keys_url: faker.internet.url(),
  collaborators_url: faker.internet.url(),
  teams_url: faker.internet.url(),
  hooks_url: faker.internet.url(),
  issue_events_url: faker.internet.url(),
  events_url: faker.internet.url(),
  assignees_url: faker.internet.url(),
  branches_url: faker.internet.url(),
  tags_url: faker.internet.url(),
  blobs_url: faker.internet.url(),
  git_tags_url: faker.internet.url(),
  git_refs_url: faker.internet.url(),
  trees_url: faker.internet.url(),
  statuses_url: faker.internet.url(),
  languages_url: faker.internet.url(),
  stargazers_url: faker.internet.url(),
  contributors_url: faker.internet.url(),
  subscribers_url: faker.internet.url(),
  subscription_url: faker.internet.url(),
  commits_url: faker.internet.url(),
  git_commits_url: faker.internet.url(),
  comments_url: faker.internet.url(),
  issue_comment_url: faker.internet.url(),
  contents_url: faker.internet.url(),
  compare_url: faker.internet.url(),
  merges_url: faker.internet.url(),
  archive_url: faker.internet.url(),
  downloads_url: faker.internet.url(),
  issues_url: faker.internet.url(),
  pulls_url: faker.internet.url(),
  milestones_url: faker.internet.url(),
  notifications_url: faker.internet.url(),
  labels_url: faker.internet.url(),
  releases_url: faker.internet.url(),
  deployments_url: faker.internet.url(),
  created_at: faker.date.recent().toISOString(),
  updated_at: faker.date.recent().toISOString(),
  pushed_at: faker.date.recent().toISOString(),
  git_url: faker.internet.url(),
  ssh_url: faker.internet.url(),
  clone_url: faker.internet.url(),
  svn_url: faker.internet.url(),
  homepage: faker.internet.url(),
  size: faker.random.number(),
  stargazers_count: faker.random.number(),
  watchers_count: faker.random.number(),
  language: faker.address.country(),
  has_issues: faker.random.boolean(),
  has_projects: faker.random.boolean(),
  has_downloads: faker.random.boolean(),
  has_wiki: faker.random.boolean(),
  has_pages: faker.random.boolean(),
  forks_count: faker.random.number(),
  mirror_url: faker.internet.url(),
  archived: faker.random.boolean(),
  disabled: faker.random.boolean(),
  open_issues_count: faker.random.number(),
  license: {
    key: faker.random.uuid(),
    name: faker.name.firstName(),
    spdx_id: faker.random.uuid(),
    url: faker.internet.url(),
    node_id: faker.random.uuid()
  },
  forks: faker.random.number(),
  open_issues: faker.random.number(),
  watchers: faker.random.number(),
  default_branch: faker.random.word(),
})

export const mockRepositoryListModel = (): LoadUserRepositoryToList.Model[] => ([
  mockRepositoryModel(),
  mockRepositoryModel(),
  mockRepositoryModel()
])

export class ILoadUserRepositoryToListSpy implements ILoadUserRepositoryToList {
  callsCount = 0
  repositories = mockRepositoryListModel()

  async loadAll(): Promise<LoadUserRepositoryToList.Model[]> {
    this.callsCount++
    return this.repositories
  }
}