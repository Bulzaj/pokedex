import { useState, useEffect } from "react";
import axiosInstance from "../axiosConfig";
import { TOTAL_RECORDS } from "../consts";
import FetchError from "../errors/fetchError";

const usePokemonNames = function () {
  const [pokemonNames, setPokemonNames] = useState([]);

  const fetchPokemonNames = async function () {
    try {
      const res = await axiosInstance.get(`/pokemon?limit=${TOTAL_RECORDS}`);
      const names = res.data.results.map((element) => element.name);

      if (!names) throw new FetchError();
      setPokemonNames(names);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPokemonNames();
  }, []);

  return pokemonNames;
};

export default usePokemonNames;
