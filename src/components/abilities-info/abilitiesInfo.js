import { Accordion, Container, Button } from "react-bootstrap";
import AccordionBody from "react-bootstrap/esm/AccordionBody";
import { capitalizeFirstLetter } from "../../utils";

// TODO: list other pokemons with that ability
// TODO: move version select to pokemon detail page and add flavour_text_desc || or not ?
const AbilitiesInfo = function (props) {
  console.log(props?.abilities);

  let abilities = null;
  if (props.abilities) {
    let i = -1;
    abilities = props.abilities.map((ability) => {
      i++;
      return (
        <Accordion.Item key={i} eventKey={i}>
          <Accordion.Header>
            {ability.names
              .filter((name) => name.language.name === "en")
              .map((name) => name.name)}
            {/* {capitalizeFirstLetter(ability.name)} */}
          </Accordion.Header>
          <AccordionBody>
            <p>{ability.effect_entries[1].effect}</p>
            <div className="d-flex justify-content-center mt-3">
              <Button variant="secondary">See other Pokemons ...</Button>
            </div>
          </AccordionBody>
        </Accordion.Item>
      );
    });
  }

  return (
    <Container fluid className="bg-light rounded p-2">
      <h3 className="display-3">Abilities</h3>
      <p>
        Provide passive effects for Pokémon in battle or in the overworld.
        Pokémon have multiple possible abilities but can have only one ability
        at a time. Check out Bulbapedia for greater detail.
      </p>
      <Accordion flush>{abilities}</Accordion>
    </Container>
  );
};

export default AbilitiesInfo;
