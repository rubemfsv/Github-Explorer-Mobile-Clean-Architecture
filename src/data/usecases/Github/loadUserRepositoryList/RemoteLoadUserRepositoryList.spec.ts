import { RemoteLoadUserRepositoryList } from './RemoteLoadUserRepositoryList'
import { HttpClientSpy, mockRemoteRepositoryListModel } from '../../../test'
import { HttpStatusCode } from '../../../protocols/http'
import { UnexpectedError } from '../../../../domain/errors'

import faker from 'faker'

type SutTypes = {
  sut: RemoteLoadUserRepositoryList
  httpClientSpy: HttpClientSpy<RemoteLoadUserRepositoryList.Model[]>
}

const makeSut = (url = faker.internet.url()): SutTypes => {
  const httpClientSpy = new HttpClientSpy<RemoteLoadUserRepositoryList.Model[]>()
  const sut = new RemoteLoadUserRepositoryList(url, httpClientSpy)
  return {
    sut,
    httpClientSpy
  }
}

describe('RemoteLoadUserRepositoryList', () => {
  test('Should return a list of SurveyModels if HttpClient returns 200', async () => {
    const { sut, httpClientSpy } = makeSut()
    const httpResult = mockRemoteRepositoryListModel()
    httpClientSpy.response = {
      statusCode: HttpStatusCode.ok,
      body: httpResult
    }

    const surveyList = await sut.loadAll()

    expect(surveyList).toEqual([{
      id: httpResult[0].id,
      node_id: httpResult[0].node_id,
      name: httpResult[0].name,
      full_name: httpResult[0].full_name,
      private: httpResult[0].private,
      owner: httpResult[0].owner,
      html_url: httpResult[0].html_url,
      description: httpResult[0].description,
      fork: httpResult[0].fork,
      url: httpResult[0].url,
      forks_url: httpResult[0].forks_url,
      keys_url: httpResult[0].keys_url,
      collaborators_url: httpResult[0].collaborators_url,
      teams_url: httpResult[0].teams_url,
      hooks_url: httpResult[0].hooks_url,
      issue_events_url: httpResult[0].issue_events_url,
      events_url: httpResult[0].events_url,
      assignees_url: httpResult[0].assignees_url,
      branches_url: httpResult[0].branches_url,
      tags_url: httpResult[0].tags_url,
      blobs_url: httpResult[0].blobs_url,
      git_tags_url: httpResult[0].git_tags_url,
      git_refs_url: httpResult[0].git_refs_url,
      trees_url: httpResult[0].trees_url,
      statuses_url: httpResult[0].statuses_url,
      languages_url: httpResult[0].languages_url,
      stargazers_url: httpResult[0].stargazers_url,
      contributors_url: httpResult[0].contributors_url,
      subscribers_url: httpResult[0].subscribers_url,
      subscription_url: httpResult[0].subscription_url,
      commits_url: httpResult[0].commits_url,
      git_commits_url: httpResult[0].git_commits_url,
      comments_url: httpResult[0].comments_url,
      issue_comment_url: httpResult[0].issue_comment_url,
      contents_url: httpResult[0].contents_url,
      compare_url: httpResult[0].compare_url,
      merges_url: httpResult[0].merges_url,
      archive_url: httpResult[0].archive_url,
      downloads_url: httpResult[0].downloads_url,
      issues_url: httpResult[0].issues_url,
      pulls_url: httpResult[0].pulls_url,
      milestones_url: httpResult[0].milestones_url,
      notifications_url: httpResult[0].notifications_url,
      labels_url: httpResult[0].labels_url,
      releases_url: httpResult[0].releases_url,
      deployments_url: httpResult[0].deployments_url,
      created_at: httpResult[0].created_at,
      updated_at: httpResult[0].updated_at,
      pushed_at: httpResult[0].pushed_at,
      git_url: httpResult[0].git_url,
      ssh_url: httpResult[0].ssh_url,
      clone_url: httpResult[0].clone_url,
      svn_url: httpResult[0].svn_url,
      homepage: httpResult[0].homepage,
      size: httpResult[0].size,
      stargazers_count: httpResult[0].stargazers_count,
      watchers_count: httpResult[0].watchers_count,
      language: httpResult[0].language,
      has_issues: httpResult[0].has_issues,
      has_projects: httpResult[0].has_projects,
      has_downloads: httpResult[0].has_downloads,
      has_wiki: httpResult[0].has_wiki,
      has_pages: httpResult[0].has_pages,
      forks_count: httpResult[0].forks_count,
      mirror_url: httpResult[0].mirror_url,
      archived: httpResult[0].archived,
      disabled: httpResult[0].disabled,
      open_issues_count: httpResult[0].open_issues_count,
      license: httpResult[0].license,
      forks: httpResult[0].forks,
      open_issues: httpResult[0].open_issues,
      watchers: httpResult[0].watchers,
      default_branch: httpResult[0].default_branch,
    }, {
      id: httpResult[1].id,
      node_id: httpResult[1].node_id,
      name: httpResult[1].name,
      full_name: httpResult[1].full_name,
      private: httpResult[1].private,
      owner: httpResult[1].owner,
      html_url: httpResult[1].html_url,
      description: httpResult[1].description,
      fork: httpResult[1].fork,
      url: httpResult[1].url,
      forks_url: httpResult[1].forks_url,
      keys_url: httpResult[1].keys_url,
      collaborators_url: httpResult[1].collaborators_url,
      teams_url: httpResult[1].teams_url,
      hooks_url: httpResult[1].hooks_url,
      issue_events_url: httpResult[1].issue_events_url,
      events_url: httpResult[1].events_url,
      assignees_url: httpResult[1].assignees_url,
      branches_url: httpResult[1].branches_url,
      tags_url: httpResult[1].tags_url,
      blobs_url: httpResult[1].blobs_url,
      git_tags_url: httpResult[1].git_tags_url,
      git_refs_url: httpResult[1].git_refs_url,
      trees_url: httpResult[1].trees_url,
      statuses_url: httpResult[1].statuses_url,
      languages_url: httpResult[1].languages_url,
      stargazers_url: httpResult[1].stargazers_url,
      contributors_url: httpResult[1].contributors_url,
      subscribers_url: httpResult[1].subscribers_url,
      subscription_url: httpResult[1].subscription_url,
      commits_url: httpResult[1].commits_url,
      git_commits_url: httpResult[1].git_commits_url,
      comments_url: httpResult[1].comments_url,
      issue_comment_url: httpResult[1].issue_comment_url,
      contents_url: httpResult[1].contents_url,
      compare_url: httpResult[1].compare_url,
      merges_url: httpResult[1].merges_url,
      archive_url: httpResult[1].archive_url,
      downloads_url: httpResult[1].downloads_url,
      issues_url: httpResult[1].issues_url,
      pulls_url: httpResult[1].pulls_url,
      milestones_url: httpResult[1].milestones_url,
      notifications_url: httpResult[1].notifications_url,
      labels_url: httpResult[1].labels_url,
      releases_url: httpResult[1].releases_url,
      deployments_url: httpResult[1].deployments_url,
      created_at: httpResult[1].created_at,
      updated_at: httpResult[1].updated_at,
      pushed_at: httpResult[1].pushed_at,
      git_url: httpResult[1].git_url,
      ssh_url: httpResult[1].ssh_url,
      clone_url: httpResult[1].clone_url,
      svn_url: httpResult[1].svn_url,
      homepage: httpResult[1].homepage,
      size: httpResult[1].size,
      stargazers_count: httpResult[1].stargazers_count,
      watchers_count: httpResult[1].watchers_count,
      language: httpResult[1].language,
      has_issues: httpResult[1].has_issues,
      has_projects: httpResult[1].has_projects,
      has_downloads: httpResult[1].has_downloads,
      has_wiki: httpResult[1].has_wiki,
      has_pages: httpResult[1].has_pages,
      forks_count: httpResult[1].forks_count,
      mirror_url: httpResult[1].mirror_url,
      archived: httpResult[1].archived,
      disabled: httpResult[1].disabled,
      open_issues_count: httpResult[1].open_issues_count,
      license: httpResult[1].license,
      forks: httpResult[1].forks,
      open_issues: httpResult[1].open_issues,
      watchers: httpResult[1].watchers,
      default_branch: httpResult[1].default_branch,
    }, {
      id: httpResult[2].id,
      node_id: httpResult[2].node_id,
      name: httpResult[2].name,
      full_name: httpResult[2].full_name,
      private: httpResult[2].private,
      owner: httpResult[2].owner,
      html_url: httpResult[2].html_url,
      description: httpResult[2].description,
      fork: httpResult[2].fork,
      url: httpResult[2].url,
      forks_url: httpResult[2].forks_url,
      keys_url: httpResult[2].keys_url,
      collaborators_url: httpResult[2].collaborators_url,
      teams_url: httpResult[2].teams_url,
      hooks_url: httpResult[2].hooks_url,
      issue_events_url: httpResult[2].issue_events_url,
      events_url: httpResult[2].events_url,
      assignees_url: httpResult[2].assignees_url,
      branches_url: httpResult[2].branches_url,
      tags_url: httpResult[2].tags_url,
      blobs_url: httpResult[2].blobs_url,
      git_tags_url: httpResult[2].git_tags_url,
      git_refs_url: httpResult[2].git_refs_url,
      trees_url: httpResult[2].trees_url,
      statuses_url: httpResult[2].statuses_url,
      languages_url: httpResult[2].languages_url,
      stargazers_url: httpResult[2].stargazers_url,
      contributors_url: httpResult[2].contributors_url,
      subscribers_url: httpResult[2].subscribers_url,
      subscription_url: httpResult[2].subscription_url,
      commits_url: httpResult[2].commits_url,
      git_commits_url: httpResult[2].git_commits_url,
      comments_url: httpResult[2].comments_url,
      issue_comment_url: httpResult[2].issue_comment_url,
      contents_url: httpResult[2].contents_url,
      compare_url: httpResult[2].compare_url,
      merges_url: httpResult[2].merges_url,
      archive_url: httpResult[2].archive_url,
      downloads_url: httpResult[2].downloads_url,
      issues_url: httpResult[2].issues_url,
      pulls_url: httpResult[2].pulls_url,
      milestones_url: httpResult[2].milestones_url,
      notifications_url: httpResult[2].notifications_url,
      labels_url: httpResult[2].labels_url,
      releases_url: httpResult[2].releases_url,
      deployments_url: httpResult[2].deployments_url,
      created_at: httpResult[2].created_at,
      updated_at: httpResult[2].updated_at,
      pushed_at: httpResult[2].pushed_at,
      git_url: httpResult[2].git_url,
      ssh_url: httpResult[2].ssh_url,
      clone_url: httpResult[2].clone_url,
      svn_url: httpResult[2].svn_url,
      homepage: httpResult[2].homepage,
      size: httpResult[2].size,
      stargazers_count: httpResult[2].stargazers_count,
      watchers_count: httpResult[2].watchers_count,
      language: httpResult[2].language,
      has_issues: httpResult[2].has_issues,
      has_projects: httpResult[2].has_projects,
      has_downloads: httpResult[2].has_downloads,
      has_wiki: httpResult[2].has_wiki,
      has_pages: httpResult[2].has_pages,
      forks_count: httpResult[2].forks_count,
      mirror_url: httpResult[2].mirror_url,
      archived: httpResult[2].archived,
      disabled: httpResult[2].disabled,
      open_issues_count: httpResult[2].open_issues_count,
      license: httpResult[2].license,
      forks: httpResult[2].forks,
      open_issues: httpResult[2].open_issues,
      watchers: httpResult[2].watchers,
      default_branch: httpResult[2].default_branch,
    }])
  })

  test('Should return an empty list if HttpClient returns 204', async () => {
    const { sut, httpClientSpy } = makeSut()
    httpClientSpy.body = {
      statusCode: HttpStatusCode.noContent
    }

    const surveyList = await sut.loadAll()

    expect(surveyList).toEqual([])
  })

  test('Should call HttpClient with correct URL and Method', async () => {
    const url = faker.internet.url()
    const { sut, httpClientSpy } = makeSut(url)

    await sut.loadAll()

    expect(httpClientSpy.url).toBe(url)
    expect(httpClientSpy.method).toBe('get')
  })

  test('Should throw UnexpectedError if HttpClient returns 404', async () => {
    const { sut, httpClientSpy } = makeSut()
    httpClientSpy.response = {
      statusCode: HttpStatusCode.notFound
    }

    const promise = sut.loadAll()

    await expect(promise).rejects.toThrow(new UnexpectedError())
  })

  test('Should throw UnexpectedError if HttpClient returns 500', async () => {
    const { sut, httpClientSpy } = makeSut()
    httpClientSpy.response = {
      statusCode: HttpStatusCode.serverError
    }

    const promise = sut.loadAll()

    await expect(promise).rejects.toThrow(new UnexpectedError())
  })
})