import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { capitalizeFirstLetter } from "../../utils";

const TitleBarButton = function (props) {
  const { pokemonName, pokemonId } = props;
  const disabled = !pokemonName && !pokemonId ? true : false;
  const navigate = useNavigate();

  if (!pokemonName && !pokemonId) return null;

  const handleClick = function () {
    navigate(`/pokemon/${pokemonName}`);
  };

  return (
    <Button
      className="w-100"
      disabled={disabled}
      size="lg"
      variant="outline-dark"
      onClick={handleClick}
    >
      <span>
        {capitalizeFirstLetter(pokemonName) + " "}
        <strong className="text-muted">#{`${pokemonId}`.padStart(3, 0)}</strong>
      </span>
    </Button>
  );
};

export default TitleBarButton;
