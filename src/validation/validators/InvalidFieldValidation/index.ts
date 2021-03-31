import { IFieldValidation } from '../../protocols'
import { InvalidUserError } from '../../errors'

export class InvalidFieldValidation implements IFieldValidation {
  constructor(
    readonly field: string,
    private readonly fieldToCompare: string
  ) { }

  validate(input: object): Error {
    return new InvalidUserError()
    // input[this.field] !== input[this.fieldToCompare] ? new InvalidUserError() : null
  }
}