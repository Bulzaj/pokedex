import { capitalizeFirstLetter } from "../../utils";
import CustomSpinner from "../custom-spinner/customSpinner";
import ImageListItem from "../image-list-item/imageListItem";
import List from "../list/list";

const PokemonList = function (props) {
  const { pokemonCollection } = props;

  if (!pokemonCollection) return <CustomSpinner />;

  const itemWrapper = function (item) {
    const imgSrc = item.sprites.other.dream_world.front_default;
    const title = capitalizeFirstLetter(item.name);
    return <ImageListItem imgSrc={imgSrc} title={title} />;
  };

  const itemKey = (item) => item.name;

  return (
    <List
      items={pokemonCollection}
      itemKey={itemKey}
      itemWrapper={itemWrapper}
    />
  );
};

export default PokemonList;
