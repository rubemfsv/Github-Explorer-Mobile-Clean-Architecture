import { RemoteLoadUserFollowersList } from './RemoteLoadUserFollowersList'
import { HttpClientSpy, mockRemoteUserFollowerListModel } from '../../../test'
import { HttpStatusCode } from '../../../protocols/http'
import { UnexpectedError } from '../../../../domain/errors'

import faker from 'faker'

type SutTypes = {
  sut: RemoteLoadUserFollowersList
  httpClientSpy: HttpClientSpy<RemoteLoadUserFollowersList.Model[]>
}

const makeSut = (url = faker.internet.url()): SutTypes => {
  const httpClientSpy = new HttpClientSpy<RemoteLoadUserFollowersList.Model[]>()
  const sut = new RemoteLoadUserFollowersList(url, httpClientSpy)
  return {
    sut,
    httpClientSpy
  }
}

describe('RemoteLoadUserFollowersList', () => {
  test('Should return a list of SurveyModels if HttpClient returns 200', async () => {
    const { sut, httpClientSpy } = makeSut()
    const httpResult = mockRemoteUserFollowerListModel()
    httpClientSpy.response = {
      statusCode: HttpStatusCode.ok,
      body: httpResult
    }

    const surveyList = await sut.loadAll()

    expect(surveyList).toEqual([{
      id: httpResult[0].id,
      login: httpResult[0].login,
      node_id: httpResult[0].node_id,
      avatar_url: httpResult[0].avatar_url,
      gravatar_id: httpResult[0].gravatar_id,
      url: httpResult[0].url,
      html_url: httpResult[0].html_url,
      followers_url: httpResult[0].followers_url,
      following_url: httpResult[0].following_url,
      gists_url: httpResult[0].gists_url,
      starred_url: httpResult[0].starred_url,
      subscriptions_url: httpResult[0].subscriptions_url,
      organizations_url: httpResult[0].organizations_url,
      repos_url: httpResult[0].repos_url,
      events_url: httpResult[0].events_url,
      received_events_url: httpResult[0].received_events_url,
      type: httpResult[0].type,
      site_admin: httpResult[0].site_admin,
      name: httpResult[0].name,
      company: httpResult[0].company,
      blog: httpResult[0].blog,
      location: httpResult[0].location,
      email: httpResult[0].email,
      hireable: httpResult[0].hireable,
      bio: httpResult[0].bio,
      twitter_username: httpResult[0].twitter_username,
      public_repos: httpResult[0].public_repos,
      public_gists: httpResult[0].public_gists,
      followers: httpResult[0].followers,
      following: httpResult[0].following,
      created_at: httpResult[0].created_at,
      updated_at: httpResult[0].updated_at,
      pushed_at: httpResult[0].pushed_at,
    }, {
      id: httpResult[1].id,
      login: httpResult[1].login,
      node_id: httpResult[1].node_id,
      avatar_url: httpResult[1].avatar_url,
      gravatar_id: httpResult[1].gravatar_id,
      url: httpResult[1].url,
      html_url: httpResult[1].html_url,
      followers_url: httpResult[1].followers_url,
      following_url: httpResult[1].following_url,
      gists_url: httpResult[1].gists_url,
      starred_url: httpResult[1].starred_url,
      subscriptions_url: httpResult[1].subscriptions_url,
      organizations_url: httpResult[1].organizations_url,
      repos_url: httpResult[1].repos_url,
      events_url: httpResult[1].events_url,
      received_events_url: httpResult[1].received_events_url,
      type: httpResult[1].type,
      site_admin: httpResult[1].site_admin,
      name: httpResult[1].name,
      company: httpResult[1].company,
      blog: httpResult[1].blog,
      location: httpResult[1].location,
      email: httpResult[1].email,
      hireable: httpResult[1].hireable,
      bio: httpResult[1].bio,
      twitter_username: httpResult[1].twitter_username,
      public_repos: httpResult[1].public_repos,
      public_gists: httpResult[1].public_gists,
      followers: httpResult[1].followers,
      following: httpResult[1].following,
      created_at: httpResult[1].created_at,
      updated_at: httpResult[1].updated_at,
      pushed_at: httpResult[1].pushed_at,
    }, {
      id: httpResult[2].id,
      login: httpResult[2].login,
      node_id: httpResult[2].node_id,
      avatar_url: httpResult[2].avatar_url,
      gravatar_id: httpResult[2].gravatar_id,
      url: httpResult[2].url,
      html_url: httpResult[2].html_url,
      followers_url: httpResult[2].followers_url,
      following_url: httpResult[2].following_url,
      gists_url: httpResult[2].gists_url,
      starred_url: httpResult[2].starred_url,
      subscriptions_url: httpResult[2].subscriptions_url,
      organizations_url: httpResult[2].organizations_url,
      repos_url: httpResult[2].repos_url,
      events_url: httpResult[2].events_url,
      received_events_url: httpResult[2].received_events_url,
      type: httpResult[2].type,
      site_admin: httpResult[2].site_admin,
      name: httpResult[2].name,
      company: httpResult[2].company,
      blog: httpResult[2].blog,
      location: httpResult[2].location,
      email: httpResult[2].email,
      hireable: httpResult[2].hireable,
      bio: httpResult[2].bio,
      twitter_username: httpResult[2].twitter_username,
      public_repos: httpResult[2].public_repos,
      public_gists: httpResult[2].public_gists,
      followers: httpResult[2].followers,
      following: httpResult[2].following,
      created_at: httpResult[2].created_at,
      updated_at: httpResult[2].updated_at,
      pushed_at: httpResult[2].pushed_at,
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