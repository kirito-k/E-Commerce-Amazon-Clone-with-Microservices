export class DatabaseConnectionError extends Error {
  reason = "This is Database's fault!";
  constructor() {
    super();

    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }
}
