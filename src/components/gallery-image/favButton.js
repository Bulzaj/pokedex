import { Button } from "react-bootstrap";

const FavButton = function (props) {
  const { pokemonName } = props;

  let btnName = "Add to favourites";
  let btnVariant = "primary";
  if (true) {
    btnName = "Remove from favourites";
    btnVariant = "danger";
  }

  const handleFavouritesClick = function (e, pokemonName) {
    e.stopPropagation();
  };

  return (
    <Button
      variant={btnVariant}
      onClick={(e) => handleFavouritesClick(e, pokemonName)}
    >
      {btnName}
    </Button>
  );
};

export default FavButton;
