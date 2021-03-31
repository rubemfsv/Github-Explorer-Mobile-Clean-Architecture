import { RemoteLoadUserInfo } from './RemoteLoadUserInfo'
import { HttpClientSpy } from '../../../test'
import { HttpStatusCode } from '../../../protocols/http'
import { UnexpectedError } from '../../../../domain/errors'

import faker from 'faker'

type SutTypes = {
  sut: RemoteLoadUserInfo
  httpClientSpy: HttpClientSpy<RemoteLoadUserInfo.Model>
}

const makeSut = (url = faker.internet.url()): SutTypes => {
  const httpClientSpy = new HttpClientSpy<RemoteLoadUserInfo.Model>()
  const sut = new RemoteLoadUserInfo(url, httpClientSpy)
  return {
    sut,
    httpClientSpy
  }
}

describe('RemoteLoadUserInfo', () => {
  test('Should call HttpClient with correct URL and Method', async () => {
    const url = faker.internet.url()
    const { sut, httpClientSpy } = makeSut(url)

    await sut.load()

    expect(httpClientSpy.url).toBe(url)
    expect(httpClientSpy.method).toBe('get')
  })

  test('Should throw UnexpectedError if HttpClient returns 404', async () => {
    const { sut, httpClientSpy } = makeSut()
    httpClientSpy.response = {
      statusCode: HttpStatusCode.notFound
    }

    const promise = sut.load()

    await expect(promise).rejects.toThrow(new UnexpectedError())
  })

  test('Should throw UnexpectedError if HttpClient returns 500', async () => {
    const { sut, httpClientSpy } = makeSut()
    httpClientSpy.response = {
      statusCode: HttpStatusCode.serverError
    }

    const promise = sut.load()

    await expect(promise).rejects.toThrow(new UnexpectedError())
  })
})