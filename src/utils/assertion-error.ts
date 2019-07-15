export const assertionErrorMessage = 'Assertion Error';

export function assertionError(msg: string = ''): Error {
  return new Error([assertionErrorMessage, msg].filter(v => !!v).join(':'));
}
