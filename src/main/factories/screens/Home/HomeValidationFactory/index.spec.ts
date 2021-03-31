import { makeLoginValidation } from './'
import { ValidationComposite, InvalidFieldValidation } from '../../../../../validation/validators'

describe('SignUpValidationFactory', () => {
  test('Should make ValidationComposite with correct validations', () => {
    const composite = makeLoginValidation()

    expect(composite).toEqual(ValidationComposite.build([
      new InvalidFieldValidation('searchInput', false),
    ]))
  })
})