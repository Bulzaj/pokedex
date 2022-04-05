import { Card } from "react-bootstrap";
import { capitalizeFirstLetter, generateGradient } from "../../utils";
import { useNavigate } from "react-router-dom";
import "./pokemonCard.css";

// TODO: change content of body
const PokemonCard = function (props) {
  const { pokemon } = props;
  const image = pokemon.sprites.other.dream_world.front_default;
  const types = pokemon.types;
  const navigate = useNavigate();

  const handleClick = function (e) {
    e.preventDefault();
    navigate(`/pokemon/${pokemon.name}`);
  };

  return (
    <Card className="card shadow interactive" onClick={handleClick}>
      <Card.Img
        variant="top"
        src={image}
        alt="pokomon-img"
        style={{
          height: "60%",
          objectFit: "fill",
        }}
      />
      <Card.Body>
        <Card.Title>{capitalizeFirstLetter(pokemon.name)}</Card.Title>
        <Card.Text>
          <strong className="text-muted">
            {types.length > 1 ? "Types: " : "Type: "}
          </strong>
          {types.map((type) => capitalizeFirstLetter(type.type.name + " "))}
        </Card.Text>
        <Card.Text>
          <strong className="text-muted">Base experience: </strong>
          {pokemon.base_experience}
        </Card.Text>
        <Card.Text>
          <strong className="text-muted">Weight: </strong>
          {pokemon.weight}
        </Card.Text>
      </Card.Body>
      <Card.Footer
        style={{
          background: generateGradient(types),
        }}
      ></Card.Footer>
    </Card>
  );
};

export default PokemonCard;
