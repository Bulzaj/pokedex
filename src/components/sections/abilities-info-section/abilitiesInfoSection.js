import { useEffect, useState } from "react";
import usePokemons from "../../../hooks/usePokemons";
import Section from "../../section/section";
import AbilitiesInfoSectionModal from "./abilitiesInfoSectionModal";
import AbilitiesInfoSectionAccordion from "./abilitiesInfoSectionAccordion";

// TODO: move version select to pokemon detail page and add flavour_text_desc || or not ?
const AbilitiesInfoSection = function (props) {
  const [show, setShow] = useState(false);
  const [ability, setAbility] = useState();
  const [pokemonNames, setPokemonNames] = useState();
  const { pokemons, fetchPokemons } = usePokemons();
  const { actualPokemon, abilities } = props;

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

  return (
    <>
      <Section
        title="Abilities"
        desc="Provide passive effects for Pokémon in battle or in the overworld.
          Pokémon have multiple possible abilities but can have only one ability
          at a time. Check out Bulbapedia for greater detail."
      >
        <AbilitiesInfoSectionAccordion
          modalHandleShow={modalHandleShow}
          abilities={abilities}
        />
      </Section>
      <AbilitiesInfoSectionModal
        show={show}
        onHide={modalHandleClose}
        ability={ability}
        pokemons={pokemons}
        actualPokemon={actualPokemon}
      />
    </>
  );
};

export default AbilitiesInfoSection;
