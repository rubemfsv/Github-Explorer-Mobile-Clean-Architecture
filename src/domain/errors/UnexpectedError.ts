export class UnexpectedError extends Error {
  constructor(message?: string) {
    super(message || 'Something went wrong. Please, try again later.');
    this.name = 'UnexpectedError';
  }
}
