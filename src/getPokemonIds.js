const getPokemonIds = function (pokemonNames) {
  return pokemonNames?.map((item) => {
    if (typeof item === "array") {
      throw new TypeError(
        'The Pokemon\'s name list can only contain items of type String and Object with property "name"'
      );
    }

    if (typeof item === "string" || typeof item === "number") return item;
    return item.name;
  });
};

export default getPokemonIds;
