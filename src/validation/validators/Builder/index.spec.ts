import { ValidationBuilder as sut, InvalidFieldValidation } from '../../validators'

import faker from 'faker'

describe('ValidationBuilder', () => {
  test('Should return InvalidFieldValidation', () => {
    const field = faker.database.column()
    const isFieldValid = faker.random.boolean()

    const validations = sut.field(field).validate(isFieldValid).build()

    expect(validations).toEqual([new InvalidFieldValidation(field, isFieldValid)])
  })


  test('Should return a list of validations', () => {
    const field = faker.database.column()
    const isFieldValid = faker.random.boolean()

    const validations = sut.field(field).validate(isFieldValid).build()

    expect(validations).toEqual([
      new InvalidFieldValidation(field, isFieldValid),
    ])
  })
})
