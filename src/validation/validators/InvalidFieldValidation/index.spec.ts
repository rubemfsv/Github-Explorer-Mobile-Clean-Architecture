
import { InvalidFieldValidation } from '../../validators'
import { InvalidUserError } from '../../errors'

import faker from 'faker'

const makeSut = (field: string, isFieldValid: boolean): InvalidFieldValidation =>
  new InvalidFieldValidation(field, isFieldValid)

describe('InvalidFieldValidation', () => {
  test('Should return error if isFieldValid is false', () => {
    const field = 'any_field'
    const isFieldValid: any = false
    const sut = makeSut(field, isFieldValid)

    const error = sut.validate({
      [field]: 'any_value',
      [isFieldValid]: false
    })

    expect(error).toEqual(new InvalidUserError())
  })

  test('Should return truth if isFieldValid is true', () => {
    const field = 'any_field'
    const isFieldValid: any = true
    const value = faker.random.boolean()
    const sut = makeSut(field, isFieldValid)

    const error = sut.validate({
      [field]: value,
      [isFieldValid]: value
    })

    expect(error).toBeTruthy()
  })
})
