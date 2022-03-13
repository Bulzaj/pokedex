import { useState, useEffect } from "react";
import axiosInstance from "../axiosConfig";
import FetchError from "../errors/fetchError";

const useFetchPokemonSpeciesDetails = function (speciesName) {
  const [speciesDetails, setSpeciesDetails] = useState();

  useEffect(() => {
    fetch(speciesName);
  }, [speciesName]);

  const fetch = async function (speciesName) {
    if (!speciesName) return;
    try {
      const res = await axiosInstance.get(`/pokemon-species/${speciesName}`);
      setSpeciesDetails(res.data);
    } catch (error) {
      throw new FetchError();
    }
  };

  return speciesDetails;
};

export default useFetchPokemonSpeciesDetails;
