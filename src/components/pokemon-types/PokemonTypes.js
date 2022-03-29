import { Container, Button } from "react-bootstrap";
import { capitalizeFirstLetter } from "../../utils";

const PokemonTypes = function (props) {
  return (
    <Container fluid className="bg-light rounded p-2">
      <h3 className="display-3">
        {props.types.length === 1 ? "Type" : "Types"}
      </h3>
      <div className="d-flex justify-content-around">
        {props?.types.map((type) => (
          <Button
            className="w-25"
            key={type.type.name}
            size="lg"
            variant={type.type.name}
          >
            {capitalizeFirstLetter(type.type.name)}
          </Button>
        ))}
      </div>
    </Container>
  );
};

export default PokemonTypes;
