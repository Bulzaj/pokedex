import { Accordion, Button } from "react-bootstrap";
import CustomSpinner from "../../custom-spinner/customSpinner";

const AbilitiesInfoSectionAccordion = function (props) {
  const { abilities, modalHandleShow } = props;

  if (!abilities) return <CustomSpinner />;

  const abilitiesItems = abilities?.map((ability) => {
    return (
      <Accordion.Item key={ability.name} eventKey={ability.name}>
        <Accordion.Header>
          {ability?.names
            .filter((name) => name.language.name === "en")
            .map((name) => name.name)}
        </Accordion.Header>
        <Accordion.Body>
          <p>
            {ability.effect_entries
              .filter((ability) => ability.language.name === "en")
              .map((ability) => ability.effect)}
          </p>
          <div className="d-flex justify-content-center mt-3">
            <Button
              variant="secondary"
              onClick={() => modalHandleShow(ability)}
            >
              See other Pokemons ...
            </Button>
          </div>
        </Accordion.Body>
      </Accordion.Item>
    );
  });

  return <Accordion>{abilitiesItems}</Accordion>;
};

export default AbilitiesInfoSectionAccordion;
