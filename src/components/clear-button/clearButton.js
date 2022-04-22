import { favouritesContext } from "../../context/favouritesContext";
import { Button } from "react-bootstrap";
import { useContext } from "react";

const ClearButton = function () {
  const { favourites, clear } = useContext(favouritesContext);

  if (favourites.length === 0) return null;

  const handleOnClick = function () {
    const randomPokemon =
      favourites[Math.floor(Math.random() * favourites.length)] + "";

    const confirmText = prompt(
      `Enter ${randomPokemon.toUpperCase()} to clear favourites`
    );

    if (!confirmText) return;

    if ("" + confirmText.toUpperCase() === randomPokemon.toUpperCase()) clear();
  };

  return (
    <div className="d-flex justify-content-center mt-4 mb-4">
      <Button variant="outline-danger" className="w-50" onClick={handleOnClick}>
        Clear
      </Button>
    </div>
  );
};

export default ClearButton;
