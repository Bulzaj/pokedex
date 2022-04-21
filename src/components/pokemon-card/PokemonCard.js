import { Card } from "react-bootstrap";
import { capitalizeFirstLetter, generateGradient } from "../../utils";
import FavButton from "../fav-Button/favButton";
import classes from "./pokemonCard.module.css";

const PokemonCard = function (props) {
  const { onCardClick, imgSrc, name, types, baseExperience, height, weight } =
    props;

  return (
    <Card
      className="shadow interactive"
      onClick={() => onCardClick && onCardClick}
    >
      <Card.Img
        className={classes.cardImg}
        variant="top"
        src={imgSrc}
        alt="pokomon-img"
      />
      <Card.Body>
        <Card.Title>{capitalizeFirstLetter(name)}</Card.Title>
        <Card.Text>
          <strong className="text-muted">
            {types.length > 1 ? "Types: " : "Type: "}
          </strong>
          {types.map((type) => capitalizeFirstLetter(type.type.name + " "))}
        </Card.Text>
        <Card.Text>
          <strong className="text-muted">Base experience: </strong>
          {baseExperience}
        </Card.Text>
        <span className="d-flex justify-content-between">
          <Card.Text>
            <strong className="text-muted">Height: </strong>
            {`${height * 10} cm`}
          </Card.Text>
          <Card.Text>
            <strong className="text-muted">/</strong>
          </Card.Text>
          <Card.Text>
            <strong className="text-muted">Weight: </strong>
            {`${weight / 10} kg`}
          </Card.Text>
        </span>
      </Card.Body>
      <Card.Footer
        style={{
          background: generateGradient(types),
        }}
      >
        <FavButton />
      </Card.Footer>
    </Card>
  );
};

export default PokemonCard;
