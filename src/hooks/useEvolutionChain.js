import axios from "axios";
import { useEffect, useState } from "react";
import FetchError from "../errors/fetchError";

const useFetchEvolutionChain = function (url) {
  const [chain, setChain] = useState([]);

  useEffect(() => {
    fetch(url);
  }, [url]);

  const fetch = async function (url) {
    if (!url || url.length === 0) return;

    try {
      const response = await axios.get(url);
      const chain = response.data.chain;

      const chainArr = [parseEvolutionLink(chain)];

      let nextLink = chain.evolves_to[0];

      while (nextLink) {
        const tmp = nextLink;
        chainArr.push(parseEvolutionLink(tmp));
        nextLink = tmp.evolves_to[0];
      }
      setChain(chainArr);
    } catch (error) {
      throw new FetchError(error.message);
    }
  };

  return { chain };
};

const parseEvolutionLink = function (evolutionLink) {
  return {
    speciesName: evolutionLink.species.name,
    evolutionDetails: evolutionLink.evolution_details[0],
  };
};

export default useFetchEvolutionChain;
