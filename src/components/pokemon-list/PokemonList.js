import { useMemo, useContext, useEffect } from "react";
import { Row, Col, Spinner } from "react-bootstrap";
import PokemonCard from "../pokemon-card/PokemonCard";
import useFetchPokemonDetails from "../../hooks/useFetchPokemonsDetails";
import { PokemonsDetailsContext } from "../../context/pokemonsDetailsContext";

const PokemonList = function (props) {
  const pokemonNames = useMemo(
    () => props.results.map((result) => result.name),
    [props.results]
  );

  const { pokemonsDetails, isLoading } = useFetchPokemonDetails(pokemonNames);
  const [, setContext] = useContext(PokemonsDetailsContext);

  useEffect(() => {
    if (!pokemonsDetails.length) return;
    setContext(pokemonsDetails);
  }, [pokemonsDetails]);

  if (props.results.length === 0) {
    return (
      <div className="d-flex justify-content-center align-items-center h-100">
        <Spinner animation="border" role="status" />
      </div>
    );
  }

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
