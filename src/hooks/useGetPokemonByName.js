import { useContext, useEffect, useState } from "react";
import { PokemonsDetailsContext } from "../context/pokemonsDetailsContext";
import axiosInstance from "../axios-config";
import FetchError from "../errors/fetch-error";

const useGetPokemonByName = function (pokemonName) {
  const [context] = useContext(PokemonsDetailsContext);
  const [pokemonDetails, setPokemonDetails] = useState();

  const fetchPokemon = async function (name) {
    try {
      const res = await axiosInstance.get(`/pokemon/${name}`);

      return res.data.results;
    } catch (error) {
      throw new FetchError();
    }
  };

  useEffect(() => {
    if (!context || !pokemonName) return;

    let result = context.find((detail) => detail.name === pokemonName);

    if (!result) {
      result = fetchPokemon(pokemonName);
    }

    setPokemonDetails(result);
  }, [pokemonName]);

  return pokemonDetails;
};

export default useGetPokemonByName;
