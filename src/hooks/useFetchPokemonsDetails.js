import { useState, useEffect } from "react";
import axiosInstance from "../axiosConfig";
import axios from "axios";
import FetchError from "../errors/fetchError";

const useFetchPokemonDetails = function (endpoints, endpointsMap) {
  const [pokemonsDetails, setPokemonsDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchDetails = async function (endpoints) {
    if (!endpoints) return;

    setIsLoading(true);

    try {
      const responses = await axios.all(
        endpoints.map((endpoint) => axiosInstance.get(endpoint))
      );
      const data = responses.map((response) => response.data);
      setPokemonsDetails(data);
      setIsLoading(false);
    } catch (error) {
      throw new FetchError();
    }
  };

  useEffect(() => {
    if (!endpoints || !(endpoints instanceof Array)) return;
    let newEndpoints = endpoints;
    if (endpointsMap) newEndpoints = endpoints.map(endpointsMap);
    fetchDetails(newEndpoints);
  }, [endpoints]);

  return { pokemonsDetails, isLoading };
};

export default useFetchPokemonDetails;
