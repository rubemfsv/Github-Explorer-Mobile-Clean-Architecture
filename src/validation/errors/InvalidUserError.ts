export class InvalidUserError extends Error {
  constructor () {
    super('Type a valid user, please')
  }
}