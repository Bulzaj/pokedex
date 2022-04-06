import { Container, Button } from "react-bootstrap";
import { capitalizeFirstLetter } from "../../../utils";
import { Spinner } from "react-bootstrap";
import Section from "../../section/section";

const PokemonTypesSection = function (props) {
  if (!props.types) return <Spinner animation="border" role="status" />;

  return (
    <Section
      title={props.types.length === 1 ? "Type" : "Types"}
      desc="Types are properties for Pokémon and their moves. Each type has three
    properties: which types of Pokémon it is super effective against, which
    types of Pokémon it is not very effective against, and which types of
    Pokémon it is completely ineffective against."
    >
      <Container className="d-flex justify-content-around">
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
      </Container>
    </Section>
  );
};

export default PokemonTypesSection;
