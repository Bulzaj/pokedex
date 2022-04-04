import { useEffect, useState } from "react";
import { TOTAL_RECORDS } from "../consts";
import fetch from "../fetch";

const useFetchPokemons = function (pokemonNames = null) {
  const [pokemons, setPokemons] = useState();

  useEffect(() => {
    if (pokemons) return;
    let queryStrings = null;
    if (!pokemonNames)
      queryStrings = {
        limit: TOTAL_RECORDS,
      };

    fetch(
      {
        endpoint: "pokemon",
        ids: pokemonNames,
        queryStrings,
      },
      (data) => setPokemons(data)
    );
  }, [pokemons, pokemonNames]);

  return pokemons;
};

export default useFetchPokemons;
