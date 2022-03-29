import { Container, Row, Col, Spinner, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import useEvolutionChain from "../../hooks/useEvolutionChain";
import useFetchPokemonDetails from "../../hooks/useFetchPokemonsDetails";
import { capitalizeFirstLetter } from "../../utils";

const EvolutionChain = function (props) {
  const { chain, evolutionDetails } = useEvolutionChain(
    props.evolutionChainUrl
  );
  const { pokemonsDetails, isLoading } = useFetchPokemonDetails(chain);
  const navigate = useNavigate();

  const handleOnClick = function (name) {
    navigate(`/pokemon/${name}`);
  };

  let evolutionChainFigures = <Spinner animation="border" role="status" />;
  if (pokemonsDetails && !isLoading) {
    evolutionChainFigures = pokemonsDetails.map((pokemonDetail) => {
      const images = pokemonDetail.sprites.other;
      return (
        <Col
          key={pokemonDetail.id}
          className="interactive d-flex flex-column align-items-center mb-3"
          onClick={() => handleOnClick(pokemonDetail.name)}
        >
          <Image
            style={{ width: "230px", height: "230px" }}
            className="bg-light"
            roundedCircle
            src={
              images.dream_world.front_default ||
              images.home.front_default ||
              images["offical-artwork"].front_default
            }
          />
          <h3>
            {capitalizeFirstLetter(pokemonDetail.name)}{" "}
            <strong className="text-muted">
              #{`${pokemonDetail.id}`.padStart(3, 0)}
            </strong>
          </h3>
        </Col>
      );
    });
  }

  return (
    <Container fluid className="bg-dark text-light rounded p-2">
      <h3 className="display-3">Evolution Chain</h3>
      <Row xs={1} md={"auto"} className="justify-content-center">
        {evolutionChainFigures}
      </Row>
    </Container>
  );
};

export default EvolutionChain;
