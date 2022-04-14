class PropsError extends Error {
  constructor(
    message = "Passed properties does not meet requirements of component"
  ) {
    super(message);
    this.name = "PropsError";
  }
}

export default PropsError;
