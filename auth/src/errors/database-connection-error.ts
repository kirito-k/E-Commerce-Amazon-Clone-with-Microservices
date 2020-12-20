export class DatabaseConnectionError extends Error {
  statusCode = 500;
  reason = "This is Database's fault!";

  constructor() {
    super();

    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }

  serializeErrors() {
    return [{ message: this.reason }];
  }
}
