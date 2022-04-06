import { useEffect, useState } from "react";
import usePokemons from "../../hooks/usePokemons";
import { Container, Row, Col, Button } from "react-bootstrap";
import CustomSpinner from "../custom-spinner/customSpinner";
import { capitalizeFirstLetter } from "../../utils";

const TitleBar = function (props) {
  const { currentPokemonName, currentPokemonId } = props;
  const [next, setNext] = useState();
  const [prev, setPrev] = useState();
  const { pokemons, fetchPokemons } = usePokemons();

  useEffect(() => {});

  if (!currentPokemonName || !currentPokemonId) return <CustomSpinner />;

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
          <Button size="lg" variant="outline-dark">
            Prev
          </Button>
        </Col>
        <Col
          className="d-flex align-items-center justify-content-center"
          xs={6}
          lg={{ span: 3, order: 3 }}
        >
          <Button size="lg" variant="outline-dark">
            Next
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default TitleBar;
