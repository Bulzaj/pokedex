import { Container, Button } from "react-bootstrap";
import { capitalizeFirstLetter } from "../../utils";

const PokemonTypes = function (props) {
  return (
    <Container fluid className="bg-light rounded p-2">
      <h3 className="display-3">
        {props.types.length === 1 ? "Type" : "Types"}
      </h3>
      <p>
        Types are properties for Pokémon and their moves. Each type has three
        properties: which types of Pokémon it is super effective against, which
        types of Pokémon it is not very effective against, and which types of
        Pokémon it is completely ineffective against.
      </p>
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
