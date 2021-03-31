import { IFieldValidation } from '../../protocols'
import { InvalidFieldValidation } from '../../validators'

export class ValidationBuilder {
  private constructor(
    private readonly fieldName: string,
    private readonly validations: IFieldValidation[]
  ) { }

  static field(fieldName: string): ValidationBuilder {
    return new ValidationBuilder(fieldName, [])
  }

  validate(isFieldValid: boolean): ValidationBuilder {
    this.validations.push(new InvalidFieldValidation(this.fieldName, isFieldValid))
    return this
  }

  build(): IFieldValidation[] {
    return this.validations
  }
}