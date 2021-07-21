export class ForbiddenAddress extends Error {
  redirectAddress;
  constructor(redirectAddress: string) {
    super('Redirection needed');
    this.redirectAddress = redirectAddress;
  }
}
