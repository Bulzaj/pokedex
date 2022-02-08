import { Card } from "react-bootstrap";
import { capitalizeFirstLetter } from "../../utils";
import "./pokemon-card.css";

const PokemonCard = function (props) {
  const { pokemon } = props;
  const image = pokemon.sprites.other.dream_world.front_default;
  const types = pokemon.types;

  return (
    <>
      <Card
        style={{
          height: "470px",
          minWidth: "290px",
        }}
        className="shadow-lg pe"
      >
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
            background: generateFooterColor(types),
          }}
        ></Card.Footer>
      </Card>
    </>
  );
};

const generateFooterColor = function (types) {
  if (!types) throw Error("No pokemon types provided");

  const colors = types.map((type) => `--color-${type.type.name}`);

  if (colors.length === 1) return `var(${colors[0]})`;

  return `linear-gradient(to right, ${colors.map(
    (color) => ` var(${color})`
  )})`;
};

export default PokemonCard;
