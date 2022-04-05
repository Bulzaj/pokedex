import { useEffect, useMemo, useState } from "react";
import fetch from "../fetch";

const useFetchPokemons = function (pokemonNames = null, queryStrings = null) {
  const [pokemons, setPokemons] = useState();

  const requestConfig = useMemo(
    () => ({
      endpoint: "pokemon",
      ids: pokemonNames,
      queryStrings,
    }),
    [pokemonNames, queryStrings]
  );

  const applyData = (data) => setPokemons(data);

  useEffect(() => {
    if (pokemons) return;
    fetch(requestConfig, applyData);
  }, [pokemons, requestConfig]);

  return {
    pokemons,
    fetchPokemons: (pokemonNames, queryStrings) =>
      fetch({ ...requestConfig, pokemonNames, queryStrings }, applyData),
  };
};

export default useFetchPokemons;
