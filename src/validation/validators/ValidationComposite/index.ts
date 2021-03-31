import { IFieldValidation } from '../../protocols'
import { IValidation } from '../../../presentation/protocols'

export class ValidationComposite implements IValidation {
  private constructor (private readonly validators: IFieldValidation[]) {}

  static build (validators: IFieldValidation[]): ValidationComposite {
    return new ValidationComposite(validators)
  }

  validate (fieldName: string, input: object): any {
    const validators = this.validators.filter(v => v.field === fieldName)
    for (const validator of validators) {
      const error = validator.validate(input)
      if (error) {
        return error.message
      }
    }
  }
}