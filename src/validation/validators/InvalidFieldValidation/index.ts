import { IFieldValidation } from '../../protocols'
import { InvalidUserError } from '../../errors'

export class InvalidFieldValidation implements IFieldValidation {
  constructor(
    readonly field: string,
    private readonly isFieldValid: boolean
  ) { }

  validate(input: object): Error {
    return input[this.isFieldValid] ? null : new InvalidUserError()
  }
}