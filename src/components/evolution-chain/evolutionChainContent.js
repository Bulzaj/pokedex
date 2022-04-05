import { Row, Col, Image } from "react-bootstrap";
import { capitalizeFirstLetter } from "../../utils";
import { BsInfoCircle } from "react-icons/bs";

const EvolutionChainContent = function (props) {
  const {
    pokemons,
    chain,
    handleFigureClick,
    handleInfoBtnClick,
    showEvolutionInfo,
  } = props;

  return (
    <Row xs={1} md="auto" className="justify-content-center">
      {pokemons &&
        pokemons.map((pokemon) => {
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
              {chainLink?.evolutionDetails && (
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
  );
};

export default EvolutionChainContent;
