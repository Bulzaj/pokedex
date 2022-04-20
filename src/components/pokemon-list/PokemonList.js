import { useNavigate } from "react-router-dom";
import { capitalizeFirstLetter } from "../../utils";
import CustomSpinner from "../custom-spinner/customSpinner";
import ImageListItem from "../image-list-item/imageListItem";
import List from "../list/list";

const PokemonList = function (props) {
  const { pokemonCollection } = props;
  const navigate = useNavigate();

  if (!pokemonCollection) return <CustomSpinner />;

  const itemWrapper = function (item) {
    const imgSrc = item.sprites?.other.dream_world.front_default;
    const title = capitalizeFirstLetter(item.name);
    const types = item.types;
    const details = [
      {
        key: types.length > 1 ? "Types" : "Type",
        value: types.map((type) => capitalizeFirstLetter(type.type.name + " ")),
      },
      {
        key: "Base exp",
        value: item.base_experience,
      },
      {
        key: "Height",
        value: item.height * 10 + " cm",
      },
      {
        key: "Weight",
        value: item.weight / 10 + " kg",
      },
    ];

    return (
      <ImageListItem
        href={`/pokemon/${item.name}`}
        imgSrc={imgSrc}
        title={title}
        details={details}
        onListItemClick={() => navigate(`/pokemon/${item.name}`)}
      />
    );
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
