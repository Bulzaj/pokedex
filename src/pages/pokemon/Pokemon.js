import { useEffect, useMemo } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import usePokemonSpecies from "../../hooks/usePokemonSpecies";
import useAbilities from "../../hooks/useAbilities";
import { capitalizeFirstLetter } from "../../utils";
import SpeciesDesc from "../../components/species-desc/speciesDesc";
import GeneralInfo from "../../components/general-info/generalInfo";
import AbilitiesInfo from "../../components/abilities-info/abilitiesInfo";
import StatsInfo from "../../components/stats-info/statsInfo";
import PokemonTypes from "../../components/pokemon-types/PokemonTypes";
import DamageRelations from "../../components/damage-relations/damageRelations";
import EvolutionChain from "../../components/evolution-chain/evolutionChain";
import useTypes from "../../hooks/useTypes";
import usePokemons from "../../hooks/usePokemons";
import useEvolutionChain from "../../hooks/useEvolutionChain";

// TODO: add next and previous button
const Pokemon = function () {
  const params = useParams();
  const activePokemonName = useMemo(() => [params.name], [params.name]);

  // Basic details
  const { pokemons, fetchPokemons } = usePokemons();

  useEffect(
    () => fetchPokemons([activePokemonName]),
    [fetchPokemons, activePokemonName]
  );

  const pokemonDetails = pokemons?.[0];
  const id = pokemonDetails?.id;
  const speciesName = pokemonDetails?.species.name;
  const weight = pokemonDetails?.weight;
  const height = pokemonDetails?.height;
  const baseExp = pokemonDetails?.base_experience;
  const typeList = pokemonDetails?.types;
  const abilityList = pokemonDetails?.abilities;
  const stats = pokemonDetails?.stats;

  // Species details
  const { species, fetchPokemonSpecies } = usePokemonSpecies();

  useEffect(
    () => fetchPokemonSpecies([speciesName]),
    [fetchPokemonSpecies, speciesName, activePokemonName]
  );

  const speciesDetails = species?.[0];
  const flavorTextEntries = speciesDetails?.flavor_text_entries;
  const genderRate = speciesDetails?.gender_rate;
  const baseHappiness = speciesDetails?.base_happiness;
  const isBaby = speciesDetails?.is_baby;
  const isLegendary = speciesDetails?.is_legendary;
  const isMythical = speciesDetails?.is_mythical;
  const evolvesFrom = speciesDetails?.evolves_from_species;
  const captureRate = speciesDetails?.capture_rate;
  const growthRate = speciesDetails?.growth_rate.name;
  const genera = speciesDetails?.genera;
  const evolutionChain = speciesDetails?.evolution_chain;

  // Abilities details
  const abilityNames = useMemo(
    () => abilityList?.map((ability) => ability.ability.name),
    [abilityList]
  );
  const { abilities, fetchAbilities } = useAbilities();

  useEffect(() => {
    abilityNames && fetchAbilities(abilityNames);
  }, [fetchAbilities, abilityNames, activePokemonName]);

  // Types details
  const typeNames = useMemo(
    () => typeList?.map((type) => type.type.name),
    [typeList]
  );
  const { types, fetchTypes } = useTypes();

  useEffect(() => {
    typeNames && fetchTypes(typeNames);
  }, [fetchTypes, typeNames]);

  const damageRelations = types?.map((details) => {
    return { type: details.name, relations: details.damage_relations };
  });

  // Evolution chain details
  const { chain, fetchEvolutionChain } = useEvolutionChain();

  useEffect(() => {
    evolutionChain && fetchEvolutionChain(evolutionChain.url);
  }, [fetchEvolutionChain, evolutionChain, activePokemonName]);

  // Images
  const images = pokemonDetails?.sprites;
  const artwork = images?.other["official-artwork"].front_default;

  if (!pokemonDetails) return <></>;

  const basicInfo = {
    weight,
    height,
    types,
    genderRate,
    baseExp,
    baseHappiness,
    isBaby,
    isLegendary,
    isMythical,
    evolvesFrom,
    captureRate,
    growthRate,
    genera,
  };

  return (
    <Container className="mt-3">
      <Row className="justify-content-center mb-2">
        <Col>
          <h1 className="display-1 text-center">
            {capitalizeFirstLetter(pokemonDetails?.name) + " "}
            <strong className="text-muted">#{`${id}`.padStart(3, 0)}</strong>
          </h1>
        </Col>
      </Row>
      <Row xs={1} lg={2}>
        <Col>
          <Container fluid className="bg-light rounded p-2">
            <Image src={artwork} className="img-fluid mx-auto d-block" />
          </Container>
          <StatsInfo stats={stats} />
          <PokemonTypes types={types} />
        </Col>
        <Col>
          <SpeciesDesc flavorTextEntries={flavorTextEntries} />
          <GeneralInfo info={basicInfo} />
          <AbilitiesInfo abilities={abilities} />
          <DamageRelations relations={damageRelations} />
        </Col>
      </Row>
      <Row>
        <Col>
          <EvolutionChain evolutionChain={chain} />
        </Col>
      </Row>
    </Container>
  );
};

export default Pokemon;
