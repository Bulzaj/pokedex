import { Modal } from "react-bootstrap";
import AbilitiesInfoSectionList from "./abilitiesInfoSectionList";

const AbilitiesInfoSectionModal = function (props) {
  const { show, onHide, ability, pokemons, actualPokemon } = props;

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>
          Also use{" "}
          {ability?.names
            .filter((name) => name.language.name === "en")
            .map((name) => name.name)}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <AbilitiesInfoSectionList
          pokemons={pokemons}
          actualPokemon={actualPokemon}
        />
      </Modal.Body>
    </Modal>
  );
};

export default AbilitiesInfoSectionModal;
