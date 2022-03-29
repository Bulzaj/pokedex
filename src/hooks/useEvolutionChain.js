import axios from "axios";
import { useEffect, useState } from "react";
import FetchError from "../errors/fetchError";

const useEvolutionChain = function (url) {
  const [chain, setChain] = useState([]);
  const [evolutionDetails, setEvolutionDetails] = useState();

  useEffect(() => {
    fetch(url);
  }, [url]);

  const fetch = async function (url) {
    if (!url || url.length === 0) return;

    try {
      const response = await axios.get(url);
      const chain = response.data.chain;

      const chainArr = [chain.species.name];
      const evolutionDetailsArr = [];

      let nextLink = chain.evolves_to[0];

      while (nextLink) {
        const tmp = nextLink;
        chainArr.push(tmp.species.name);
        evolutionDetailsArr.push({
          species: tmp.species.name,
          details: tmp.evolution_details[0],
        });
        nextLink = tmp.evolves_to[0];
      }
      setChain(chainArr);
      setEvolutionDetails(evolutionDetailsArr);
    } catch (error) {
      throw new FetchError(error.message);
    }
  };

  return { chain, evolutionDetails };
};

export default useEvolutionChain;
