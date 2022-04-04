import { useState, useEffect } from "react";
import fetch from "../fetch";

const useFetchPokemonSpecies = function (speciesNames) {
  const [species, setSpecies] = useState();

  useEffect(() => {
    if (species || !speciesNames) return;
    fetch({ endpoint: "pokemon-species", ids: speciesNames }, (data) =>
      setSpecies(data)
    );
  }, [speciesNames]);

  return species;
};

export default useFetchPokemonSpecies;
