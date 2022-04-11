import { useContext, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { favouritesContext } from "../../context/favouritesContext";

const FavButton = function (props) {
  const { pokemonName } = props;
  const { favourites, add, remove } = useContext(favouritesContext);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    if (favourites.includes(pokemonName)) return setAdded(true);
    return setAdded(false);
  }, [favourites, pokemonName]);

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
