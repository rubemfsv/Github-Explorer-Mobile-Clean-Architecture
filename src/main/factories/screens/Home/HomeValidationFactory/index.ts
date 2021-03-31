
import { ValidationComposite, ValidationBuilder as Builder } from '../../../../../validation/validators'

export const makeLoginValidation = (): ValidationComposite => ValidationComposite.build([
  ...Builder.field('searchInput').validate(false).build(),
])