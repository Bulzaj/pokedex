import { useEffect, useMemo } from "react";
import { Row, Col } from "react-bootstrap";
import PokemonCard from "../pokemon-card/PokemonCard";
import usePokemons from "../../hooks/usePokemons";

const PokemonList = function (props) {
  const pokemonNames = useMemo(
    () => props.pokemons.map((pokemon) => pokemon.name),
    [props.pokemons]
  );
  const { pokemons, fetchPokemons } = usePokemons();

  useEffect(
    () => pokemonNames && fetchPokemons(pokemonNames),
    [fetchPokemons, pokemonNames]
  );

  if (pokemons) {
    return (
      <Row className="d-flex justify-content-center g-3">
        {pokemons.map((pokemon) => (
          <Col md lg="auto" key={pokemon.name}>
            <PokemonCard pokemon={pokemon} />
          </Col>
        ))}
      </Row>
    );
  }

  return <></>;
};

export default PokemonList;
