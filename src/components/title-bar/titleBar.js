import { useEffect, useState } from "react";
import usePokemons from "../../hooks/usePokemons";
import { Container, Row, Col, Button } from "react-bootstrap";
import CustomSpinner from "../custom-spinner/customSpinner";
import { capitalizeFirstLetter } from "../../utils";
import TitleBarButton from "./titleBarButton";

const TitleBar = function (props) {
  const { currentPokemonName, currentPokemonId } = props;
  const [next, setNext] = useState();
  const [prev, setPrev] = useState();
  const { pokemons, fetchPokemons } = usePokemons();

  useEffect(() => {
    if (!currentPokemonId) return;
    fetchPokemons([currentPokemonId - 1, currentPokemonId + 1]);

    if (!pokemons) return;
    setNext(pokemons?.[1]);
    setPrev(pokemons?.[0]);
  }, [currentPokemonId, fetchPokemons]);

  useEffect(() => {
    if (!pokemons) return;
    pokemons[1].name && setNext(pokemons[1]);
    pokemons[0].name && setPrev(pokemons[0]);
  }, [pokemons]);

  if (!currentPokemonName || !currentPokemonId || !pokemons)
    return <CustomSpinner />;

  return (
    <Container>
      <Row xs={2} lg={3}>
        <Col xs={12} lg={{ span: 6, order: 2 }}>
          <h1 className="display-1 text-center">
            {capitalizeFirstLetter(currentPokemonName) + " "}
            <strong className="text-muted">
              #{`${currentPokemonId}`.padStart(3, 0)}
            </strong>
          </h1>
        </Col>
        <Col
          className="d-flex align-items-center justify-content-center"
          xs={6}
          lg={{ span: 3, order: 1 }}
        >
          <TitleBarButton pokemonName={prev?.name} pokemonId={prev?.id} />
        </Col>
        <Col
          className="d-flex align-items-center justify-content-center"
          xs={6}
          lg={{ span: 3, order: 3 }}
        >
          <TitleBarButton pokemonName={next?.name} pokemonId={next?.id} />
        </Col>
      </Row>
    </Container>
  );
};

export default TitleBar;
