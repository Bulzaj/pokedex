class PokemonCollectionError extends Error {
  constructor(message = "Something went wrong with collection") {
    super(message);
    this.name = "PokemonCollectionError";
  }
}

export default PokemonCollectionError;
