import { useEffect, useState } from "react";
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
import { capitalizeFirstLetter } from "../../utils";
import usePokemons from "../../hooks/usePokemons";

// TODO: move version select to pokemon detail page and add flavour_text_desc || or not ?
const AbilitiesInfo = function (props) {
  const [show, setShow] = useState(false);
  const [ability, setAbility] = useState();
  const [pokemonNames, setPokemonNames] = useState();
  const { pokemons, fetchPokemons } = usePokemons();

  useEffect(
    () => pokemonNames && fetchPokemons(pokemonNames),
    [pokemonNames, fetchPokemons]
  );

  const modalHandleShow = function (ability) {
    setAbility(ability);
    setPokemonNames(ability?.pokemon.map((pokemon) => pokemon.pokemon.name));
    setShow(true);
  };
  const modalHandleClose = function (e) {
    setShow(false);
  };

  let abilities = <Spinner animation="border" role="status" />;
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
  if (pokemons) {
    list = (
      <ListGroup
        variant="flush"
        defaultActiveKey={`/pokemon/${props.pokemonName}`}
      >
        {pokemons?.map((pokemon) => {
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
