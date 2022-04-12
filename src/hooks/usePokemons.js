import { useState, useCallback } from "react";
import fetch from "../fetch";
import getPokemonIds from "../getPokemonIds";

const usePokemons = function () {
  const [pokemons, setPokemons] = useState();

  const applyData = (data) => {
    setPokemons(data);
  };

  const fetchPokemons = useCallback(function (pokemonIds, queryStrings) {
    const validNames = getPokemonIds(pokemonIds);
    fetch(
      {
        endpoint: "pokemon",
        ids: validNames,
        queryStrings,
      },
      applyData
    );
  }, []);

  return {
    pokemons,
    fetchPokemons,
  };
};

export default usePokemons;
