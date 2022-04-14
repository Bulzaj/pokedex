import { useCallback, useState } from "react";
import fetch from "../fetch";

const useEvolutionChain = function (url) {
  const [chain, setChain] = useState([]);

  const applyData = function (data) {
    const chain = data.chain;
    const chainArr = [parseEvolutionLink(chain)];

    let nextLink = chain.evolves_to[0];

    while (nextLink) {
      const tmp = nextLink;
      chainArr.push(parseEvolutionLink(tmp));
      nextLink = tmp.evolves_to[0];
    }

    setChain(chainArr);
  };

  const fetchEvolutionChain = useCallback(function (
    evolutionChainUrl,
    queryStrings
  ) {
    fetch(
      {
        url: evolutionChainUrl,
        queryStrings,
      },
      applyData
    );
  },
  []);

  return { chain, fetchEvolutionChain };
};

const parseEvolutionLink = function (evolutionLink) {
  return {
    speciesName: evolutionLink.species.name,
    evolutionDetails: evolutionLink.evolution_details[0],
  };
};

export default useEvolutionChain;
