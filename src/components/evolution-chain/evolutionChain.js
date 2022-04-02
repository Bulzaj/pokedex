import { useState } from "react";
import { Container, Row, Col, Image, Collapse, Button } from "react-bootstrap";
import useFetchEvolutionChain from "../../hooks/useEvolutionChain";
import useFetchPokemonDetails from "../../hooks/useFetchPokemonsDetails";
import { capitalizeFirstLetter, evolutionDetailParser } from "../../utils";
import { BsInfoCircle } from "react-icons/bs";
import { useNavigate, useParams } from "react-router-dom";
import RegularList from "../../components/regular-list/regularList";

const EvolutionChain = function (props) {
  const { chain } = useFetchEvolutionChain(props.evolutionChainUrl);
  const { pokemonsDetails } = useFetchPokemonDetails(
    chain,
    (item) => `/pokemon/${item.speciesName}`
  );
  const navigate = useNavigate();
  const urlParams = useParams();
  const [selectedChainLink, setSelectedChainLink] = useState();
  const [showEvolutionInfo, setShowEvolutionInfo] = useState(false);

  const handleFigureClick = function (pokemonName) {
    if (pokemonName === urlParams) return;
    navigate(`/pokemon/${pokemonName}`);
  };

  const handleInfoBtnClick = function (chainLink) {
    if (chainLink.speciesName === selectedChainLink?.speciesName) return;
    setShowEvolutionInfo(true);
    setSelectedChainLink(chainLink);
  };

  const handleCloseInfoBtnClick = function () {
    setSelectedChainLink(null);
    setShowEvolutionInfo(false);
  };

  const title = selectedChainLink
    ? `${capitalizeFirstLetter(
        selectedChainLink.speciesName
      )} evolution details`
    : "Evolution chain";

  return (
    <Container className="bg-dark text-light rounded p-2">
      <h3 className="display-3">{title}</h3>
      <Container>
        <Collapse in={showEvolutionInfo}>
          <Container
            id="evolution-details"
            className="bg-light text-dark rounded p-2 mb-3"
          >
            <RegularList>
              {selectedChainLink
                ? Object.entries(selectedChainLink.evolutionDetails).map(
                    (detail) => {
                      return (
                        <RegularList.Item key={detail[0]}>
                          {evolutionDetailParser(detail)}
                        </RegularList.Item>
                      );
                    }
                  )
                : "Closing ..."}
            </RegularList>
            <Button variant="dark" size="lg" onClick={handleCloseInfoBtnClick}>
              Close
            </Button>
          </Container>
        </Collapse>
      </Container>
      <Row xs={1} md="auto" className="justify-content-center">
        {pokemonsDetails &&
          pokemonsDetails.map((pokemon) => {
            const otherImages = pokemon.sprites.other;
            const image =
              otherImages.dream_world.front_default ||
              otherImages.home.front_default ||
              otherImages["offical-artwork"].front_default;

            const chainLink = chain.filter(
              (link) => link.speciesName === pokemon.name
            )[0];

            return (
              <Col
                key={pokemon.name}
                className="interactive d-flex flex-column align-items-center mb-3"
              >
                <div
                  className="d-flex flex-column align-items-center"
                  onClick={() => handleFigureClick(pokemon.name)}
                >
                  <Image
                    src={image}
                    style={{ width: "230px", height: "230px" }}
                    className="bg-light"
                    roundedCircle
                  />
                  <h3>
                    {capitalizeFirstLetter(pokemon.name)}{" "}
                    <strong className="text-muted">
                      #{`${pokemon.id}`.padStart(3, 0)}
                    </strong>
                  </h3>
                </div>
                {chainLink.evolutionDetails && (
                  <span
                    className="hover-info"
                    style={{ fontSize: "54px" }}
                    onClick={() => handleInfoBtnClick(chainLink)}
                    aria-controls="evolution-details"
                    aria-expanded={showEvolutionInfo}
                  >
                    <BsInfoCircle />
                  </span>
                )}
              </Col>
            );
          })}
      </Row>
    </Container>
  );
};

export default EvolutionChain;
