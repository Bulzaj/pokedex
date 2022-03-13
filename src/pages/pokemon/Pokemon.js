import { useEffect } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import useGetPokemonByName from "../../hooks/useGetPokemonByName";
import { capitalizeFirstLetter } from "../../utils";
import SpeciesDesc from "../../components/species-desc/speciesDesc";

const Pokemon = function () {
  const params = useParams();
  const navigate = useNavigate();

  const pokemonDetails = useGetPokemonByName(params.name);
  const id = pokemonDetails?.id;
  const speciesName = pokemonDetails?.species.name;

  console.log(pokemonDetails);

  // Images
  const images = pokemonDetails?.sprites;
  const artwork = images?.other["official-artwork"].front_default;

  useEffect(() => !params.name && navigate("/"), []);

  if (!pokemonDetails) return <></>;

  return (
    <Container className="mt-3">
      <Row className="justify-content-center mb-2">
        <Col>
          <h1 className="display-3 text-center">
            {capitalizeFirstLetter(pokemonDetails?.name) + " "}
            <strong className="text-muted">#{`${id}`.padStart(3, 0)}</strong>
          </h1>
        </Col>
      </Row>
      <Row xs={1} lg={2}>
        <Col>
          <Image
            src={artwork}
            className="rounded img-fluid mx-auto d-block bg-light"
          />
        </Col>
        <Col>
          <SpeciesDesc speciesName={speciesName} />
        </Col>
      </Row>
    </Container>
  );
};

export default Pokemon;
