import { useMemo } from "react";
import { Row, Col } from "react-bootstrap";
import PokemonCard from "../pokemon-card/PokemonCard";
import useFetchPokemonDetails from "../../hooks/useFetchPokemonsDetails";

const PokemonList = function (props) {
  const pokemonNames = useMemo(
    () => props.pokemons.map((pokemon) => pokemon.name),
    [props.pokemons]
  );

  const { pokemonsDetails, isLoading } = useFetchPokemonDetails(
    pokemonNames,
    (pokemonName) => `/pokemon/${pokemonName}`
  );

  if (pokemonsDetails) {
    return (
      <Row className="d-flex justify-content-center g-3">
        {pokemonsDetails.map((pokemon) => (
          <Col md lg="auto" key={pokemon.name}>
            <PokemonCard pokemon={pokemon} isLoading={isLoading} />
          </Col>
        ))}
      </Row>
    );
  }

  return <></>;
};

export default PokemonList;
