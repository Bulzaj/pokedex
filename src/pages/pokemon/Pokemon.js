import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useGetPokemonByName from "../../hooks/useGetPokemonByName";

const Pokemon = function () {
  const params = useParams();
  const navigate = useNavigate();
  const pokemonDetails = useGetPokemonByName(params.name);

  useEffect(() => !params.name && navigate("/"), []);
  return <>{pokemonDetails?.name}</>;
};

export default Pokemon;
