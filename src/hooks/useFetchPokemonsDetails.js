import { useState, useEffect } from "react";
import axiosInstance from "../axios-config";
import axios from "axios";
import FetchError from "../errors/fetch-error";

const useFetchPokemonDetails = function (pokemonNames) {
  const [pokemonsDetails, setPokemonsDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchDetails = async function (endpoints) {
    if (!endpoints) return;

    setIsLoading(true);

    try {
      const responses = await axios.all(
        endpoints.map((endpoint) => axiosInstance.get(endpoint))
      );
      const data = responses.map((response) => response.data);
      if (!data) throw new FetchError();
      setPokemonsDetails(data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const endpoints = pokemonNames.map((name) => `/pokemon/${name}`);
    fetchDetails(endpoints);
  }, [pokemonNames]);

  return { pokemonsDetails, isLoading };
};

export default useFetchPokemonDetails;
