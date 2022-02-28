class ContextError extends Error {
  constructor(
    message = "Context was used outside context of its provider or is undefined yet"
  ) {
    super(message);
    this.name = "ContextError";
  }
}

export default ContextError;
