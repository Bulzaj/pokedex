class FetchError extends Error {
  constructor(message = "No data fetched") {
    super(message);
    this.name = "FetchError";
  }
}

export default FetchError;
