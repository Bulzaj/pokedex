class PropsError extends Error {
  _defaultMessage = "Passed properties does not meet requirements of component";
  constructor(message = this._defaultMessage) {
    super(message);
    this.name = "PropsError";
  }
}

export default PropsError;
