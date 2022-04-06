import { Row, Col } from "react-bootstrap";
import { capitalizeFirstLetter } from "../../../utils";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDoNotDisturbAlt } from "react-icons/md";
import FigureButton from "../../figure-button/figureButton";

const EvolutionChainContent = function (props) {
  const {
    pokemons,
    chain,
    handleCaptionClick,
    handleInfoClick,
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

          const caption = (
            <>
              {capitalizeFirstLetter(pokemon.name)}{" "}
              <strong className="text-muted">
                #{`${pokemon.id}`.padStart(3, 0)}
              </strong>
            </>
          );

          const buttonIcon = chainLink?.evolutionDetails ? (
            <BsInfoCircle
              size={120}
              aria-controls="evolution-details"
              aria-expanded={showEvolutionInfo}
            />
          ) : (
            <MdOutlineDoNotDisturbAlt size={120} />
          );

          return (
            <Col
              key={pokemon.name}
              className="d-flex flex-column align-items-center mb-3"
            >
              <FigureButton
                imageSrc={image}
                caption={caption}
                imageRadius={230}
                icon={buttonIcon}
                onImgClick={() => handleInfoClick(chainLink)}
                onCaptionClick={() => handleCaptionClick(pokemon.name)}
              />
            </Col>
          );
        })}
    </Row>
  );
};

export default EvolutionChainContent;
