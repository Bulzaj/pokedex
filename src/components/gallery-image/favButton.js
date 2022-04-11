import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import useFavourites from "../../hooks/useFavourites";

const FavButton = function (props) {
  const { pokemonName } = props;
  const { favourites, add, remove } = useFavourites();
  const [added, setAdded] = useState(false);

  useEffect(() => {
    if (favourites.includes(pokemonName)) return setAdded(true);
    return setAdded(false);
  }, [favourites]);

  const btnName = added ? "Remove from favourites" : "Add to favourites";

  const btnVariant = added ? "danger" : "primary";

  const handleFavouritesClick = function (e, pokemonName) {
    e.stopPropagation();
    if (!added) return add(pokemonName);
    return remove(pokemonName);
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
