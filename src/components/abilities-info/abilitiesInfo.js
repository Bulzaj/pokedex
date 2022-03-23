import { useEffect, useState } from "react";
import {
  Accordion,
  Container,
  Button,
  Modal,
  Stack,
  Figure,
} from "react-bootstrap";
import AccordionBody from "react-bootstrap/esm/AccordionBody";
import useFetchPokemonDetails from "../../hooks/useFetchPokemonsDetails";

// TODO: list other pokemons with that ability
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
        <Modal.Body>
          <PokemonList pokemonList={pokemonsDetails} />
        </Modal.Body>
      </Modal>
    </>
  );
};

const PokemonList = function (props) {
  if (!props.pokemonList) return <></>;

  return (
    <Stack gap={3} className="d-flex align-items-center">
      {props.pokemonList.map((pokemon) => {
        const image = pokemon.sprites.other.dream_world.front_default;
        return (
          <PokemonListItem
            key={pokemon.name}
            name={pokemon.name}
            image={image}
          />
        );
      })}
    </Stack>
  );
};

const PokemonListItem = function (props) {
  return (
    <Figure>
      <Figure.Image src={props.image} width={200} height={200} />
      <Figure.Caption className="text-right">{props.name}</Figure.Caption>
    </Figure>
  );
};

export default AbilitiesInfo;
