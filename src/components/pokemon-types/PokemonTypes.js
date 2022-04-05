import { Container, Button } from "react-bootstrap";
import { capitalizeFirstLetter } from "../../utils";
import { Spinner } from "react-bootstrap";

const PokemonTypes = function (props) {
  if (!props.types) return <Spinner animation="border" role="status" />;

  console.log(props.types);

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
            key={type.name}
            size="lg"
            variant={type.name}
          >
            {capitalizeFirstLetter(type.name)}
          </Button>
        ))}
      </div>
    </Container>
  );
};

export default PokemonTypes;
