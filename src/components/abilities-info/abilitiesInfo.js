import { useState } from "react";
import {
  Accordion,
  Container,
  Button,
  Modal,
  Image,
  ListGroup,
  Spinner,
} from "react-bootstrap";
import AccordionBody from "react-bootstrap/esm/AccordionBody";
import useFetchPokemonDetails from "../../hooks/useFetchPokemonsDetails";
import { capitalizeFirstLetter } from "../../utils";

// TODO: move version select to pokemon detail page and add flavour_text_desc || or not ?
const AbilitiesInfo = function (props) {
  const [show, setShow] = useState(false);
  const [ability, setAbility] = useState();
  const [pokemonNames, setPokemonNames] = useState();
  const { pokemonsDetails, isLoading } = useFetchPokemonDetails(pokemonNames);

  const modalHandleShow = function (ability) {
    setAbility(ability);
    setPokemonNames(ability?.pokemon.map((pokemon) => pokemon.pokemon.name));
    setShow(true);
  };
  const modalHandleClose = function (e) {
    setShow(false);
  };

  let abilities = null;
  if (props.abilities) {
    let i = -1;
    abilities = props.abilities?.map((ability) => {
      i++;
      return (
        <Accordion.Item key={i} eventKey={i}>
          <Accordion.Header>
            {ability?.names
              .filter((name) => name.language.name === "en")
              .map((name) => name.name)}
          </Accordion.Header>
          <AccordionBody>
            <p>{ability.effect_entries[1].effect}</p>
            <div className="d-flex justify-content-center mt-3">
              <Button
                variant="secondary"
                onClick={() => modalHandleShow(ability)}
              >
                See other Pokemons ...
              </Button>
            </div>
          </AccordionBody>
        </Accordion.Item>
      );
    });
  }

  let list = (
    <div className="d-flex justify-content-center">
      <Spinner animation="border" role="status" />
    </div>
  );
  if (!isLoading && pokemonsDetails) {
    list = (
      <ListGroup
        variant="flush"
        defaultActiveKey={`/pokemon/${props.pokemonName}`}
      >
        {pokemonsDetails?.map((pokemon) => {
          return (
            <ListGroup.Item
              href={`/pokemon/${pokemon.name}`}
              key={pokemon.name}
              className="d-flex align-items-center justify-content-around"
              action
            >
              <Image
                style={{ width: "110px", height: "110px" }}
                src={
                  pokemon.sprites.other.dream_world.front_default ||
                  pokemon.sprites.other.home.front_default ||
                  pokemon.sprites.other["official-artwork"].front_default
                }
              />
              <p className="lead">{capitalizeFirstLetter(pokemon.name)}</p>
            </ListGroup.Item>
          );
        })}
      </ListGroup>
    );
  }

  return (
    <>
      <Container fluid className="bg-light rounded p-2">
        <h3 className="display-3">Abilities</h3>
        <p>
          Provide passive effects for Pokémon in battle or in the overworld.
          Pokémon have multiple possible abilities but can have only one ability
          at a time. Check out Bulbapedia for greater detail.
        </p>
        <Accordion flush>{abilities}</Accordion>
      </Container>
      <Modal show={show} onHide={modalHandleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            Also use{" "}
            {ability?.names
              .filter((name) => name.language.name === "en")
              .map((name) => name.name)}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>{list}</Modal.Body>
      </Modal>
    </>
  );
};

export default AbilitiesInfo;
