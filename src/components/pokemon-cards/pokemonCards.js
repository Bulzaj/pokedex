import { useNavigate } from "react-router-dom";
import Gallery from "../gallery/gallery";
import PokemonCard from "../pokemon-card/pokemonCard";

const PokemonCards = function (props) {
  const { pokemonCollection } = props;
  const navigate = useNavigate();

  const itemKey = (item) => item.name;

  const itemWrapper = function (item) {
    const imageSrc = item.sprites?.other.dream_world.front_default;

    return (
      <PokemonCard
        onCardClick={() => navigate(`/pokemon/${item.name}`)}
        imgSrc={imageSrc}
        name={item.name}
        types={item.types}
        baseExperience={item.base_experience}
        height={item.height}
        weight={item.weight}
      />
    );
  };

  return (
    <Gallery
      items={pokemonCollection}
      itemKey={itemKey}
      itemWrapper={itemWrapper}
    />
  );
};

export default PokemonCards;
