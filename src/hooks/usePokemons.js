import { useState, useCallback } from "react";
import fetch from "../fetch";

const usePokemons = function () {
  const [pokemons, setPokemons] = useState();

  const applyData = (data) => {
    setPokemons(data);
  };

  const fetchPokemons = useCallback(function (pokemonNames, queryStrings) {
    fetch(
      {
        endpoint: "pokemon",
        ids: pokemonNames,
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
