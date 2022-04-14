import { useCallback, useState } from "react";
import fetch from "../fetch";

const usePokemonSpecies = function (speciesNames) {
  const [species, setSpecies] = useState();

  const applyData = (data) => {
    setSpecies(data);
  };

  const fetchPokemonSpecies = useCallback(function (
    speciesNames,
    queryStrings
  ) {
    fetch(
      {
        endpoint: "pokemon-species",
        ids: speciesNames,
        queryStrings,
      },
      applyData
    );
  },
  []);

  return { species, fetchPokemonSpecies };
};

export default usePokemonSpecies;
