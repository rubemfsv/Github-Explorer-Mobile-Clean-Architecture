import { RemoteLoadUserGistList } from './RemoteLoadUserGistList'
import { HttpClientSpy, mockRemoteGistListModel } from '../../../test'
import { HttpStatusCode } from '../../../protocols/http'
import { UnexpectedError } from '../../../../domain/errors'

import faker from 'faker'

type SutTypes = {
  sut: RemoteLoadUserGistList
  httpClientSpy: HttpClientSpy<RemoteLoadUserGistList.Model[]>
}

const makeSut = (url = faker.internet.url()): SutTypes => {
  const httpClientSpy = new HttpClientSpy<RemoteLoadUserGistList.Model[]>()
  const sut = new RemoteLoadUserGistList(url, httpClientSpy)
  return {
    sut,
    httpClientSpy
  }
}

describe('RemoteLoadUserGistList', () => {
  test('Should return a list of SurveyModels if HttpClient returns 200', async () => {
    const { sut, httpClientSpy } = makeSut()
    const httpResult = mockRemoteGistListModel()
    httpClientSpy.response = {
      statusCode: HttpStatusCode.ok,
      body: httpResult
    }

    const surveyList = await sut.loadAll()

    expect(surveyList).toEqual([{
      id: httpResult[0].id,
      url: httpResult[0].url,
      forks_url: httpResult[0].forks_url,
      commits_url: httpResult[0].commits_url,
      node_id: httpResult[0].node_id,
      git_pull_url: httpResult[0].git_pull_url,
      git_push_url: httpResult[0].git_push_url,
      html_url: httpResult[0].html_url,
      files: httpResult[0].files,
      public: httpResult[0].public,
      created_at: httpResult[0].created_at,
      updated_at: httpResult[0].updated_at,
      description: httpResult[0].description,
      comments: httpResult[0].comments,
      user: httpResult[0].user,
      comments_url: httpResult[0].comments_url,
      owner: httpResult[0].owner,
      truncated: httpResult[0].truncated,
    }, {
      id: httpResult[1].id,
      url: httpResult[1].url,
      forks_url: httpResult[1].forks_url,
      commits_url: httpResult[1].commits_url,
      node_id: httpResult[1].node_id,
      git_pull_url: httpResult[1].git_pull_url,
      git_push_url: httpResult[1].git_push_url,
      html_url: httpResult[1].html_url,
      files: httpResult[1].files,
      public: httpResult[1].public,
      created_at: httpResult[1].created_at,
      updated_at: httpResult[1].updated_at,
      description: httpResult[1].description,
      comments: httpResult[1].comments,
      user: httpResult[1].user,
      comments_url: httpResult[1].comments_url,
      owner: httpResult[1].owner,
      truncated: httpResult[1].truncated,
    }, {
      id: httpResult[2].id,
      url: httpResult[2].url,
      forks_url: httpResult[2].forks_url,
      commits_url: httpResult[2].commits_url,
      node_id: httpResult[2].node_id,
      git_pull_url: httpResult[2].git_pull_url,
      git_push_url: httpResult[2].git_push_url,
      html_url: httpResult[2].html_url,
      files: httpResult[2].files,
      public: httpResult[2].public,
      created_at: httpResult[2].created_at,
      updated_at: httpResult[2].updated_at,
      description: httpResult[2].description,
      comments: httpResult[2].comments,
      user: httpResult[2].user,
      comments_url: httpResult[2].comments_url,
      owner: httpResult[2].owner,
      truncated: httpResult[2].truncated,
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