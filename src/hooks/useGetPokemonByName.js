import { useContext, useEffect, useState } from "react";
import { PokemonsDetailsContext } from "../context/pokemonsDetailsContext";
import axiosInstance from "../axiosConfig";
import FetchError from "../errors/fetchError";

const useGetPokemonByName = function (pokemonName) {
  const [context] = useContext(PokemonsDetailsContext);
  const [pokemonDetails, setPokemonDetails] = useState();

  const fetchPokemon = async function (name) {
    try {
      const res = await axiosInstance.get(`/pokemon/${name}`);
      setPokemonDetails(res.data);
    } catch (error) {
      throw new FetchError();
    }
  };

  useEffect(() => {
    if (!pokemonName) return;

    const result = context?.find((detail) => detail.name === pokemonName);
    setPokemonDetails(result);

    if (!result) {
      fetchPokemon(pokemonName);
    }
  }, [pokemonName]);

  return pokemonDetails;
};

export default useGetPokemonByName;
