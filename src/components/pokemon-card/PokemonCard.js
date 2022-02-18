import { Card, Placeholder, Spinner } from "react-bootstrap";
import { capitalizeFirstLetter, generateFooterColor } from "../../utils";
import { useNavigate } from "react-router-dom";
import "./pokemon-card.css";

const PokemonCard = function (props) {
  const { pokemon } = props;
  const image = pokemon.sprites.other.dream_world.front_default;
  const types = pokemon.types;

  const navigate = useNavigate();

  const handleClick = function (e) {
    e.preventDefault();
    navigate(`/pokemon/${pokemon.name}`);
  };

  if (props.isLoading) {
    return (
      <Card
        className="shadow"
        style={{
          minWidth: "290px",
        }}
      >
        <div className="d-flex justify-content-center align-items-center h-100">
          <Spinner animation="grow" role="status" />
        </div>
        <Card.Body>
          <Placeholder as={Card.Title} animation="glow">
            <Placeholder xs={6} />
          </Placeholder>
          <Placeholder as={Card.Text} animation="glow">
            <Placeholder xs={3} /> <Placeholder xs={6} />
          </Placeholder>
          <Placeholder as={Card.Text} animation="glow">
            <Placeholder xs={2} /> <Placeholder xs={4} />
          </Placeholder>
          <Placeholder as={Card.Text} animation="glow">
            <Placeholder xs={3} /> <Placeholder xs={5} />
          </Placeholder>
        </Card.Body>
        <Card.Footer></Card.Footer>
      </Card>
    );
  }

  return (
    <Card className="card shadow" onClick={handleClick}>
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
  );
};

export default PokemonCard;
