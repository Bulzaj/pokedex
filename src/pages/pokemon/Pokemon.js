import { useCallback, useEffect, useMemo } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import useGetPokemonByName from "../../hooks/useGetPokemonByName";
import useFetchPokemonSpeciesDetails from "../../hooks/useFetchPokemonSpeciesDetails";
import useFetchAbilities from "../../hooks/useFetchAbilities";
import { capitalizeFirstLetter } from "../../utils";
import SpeciesDesc from "../../components/species-desc/speciesDesc";
import GeneralInfo from "../../components/general-info/generalInfo";
import AbilitiesInfo from "../../components/abilities-info/abilitiesInfo";

// TODO: add abilities section
// TODO: mention about selected pokemon type
// TODO: mention about selected pokemon weaknesses
// TODO: create stats section
// TODO: create evolution chain section
// TODO: add next and previous button
const Pokemon = function () {
  const params = useParams();
  const navigate = useNavigate();

  // Basic details
  const pokemonDetails = useGetPokemonByName(params.name);
  const id = pokemonDetails?.id;
  const speciesName = pokemonDetails?.species.name;
  const weight = pokemonDetails?.weight;
  const height = pokemonDetails?.height;
  const baseExp = pokemonDetails?.base_experience;
  const types = pokemonDetails?.types.map((type) => type.name);
  const abilityList = pokemonDetails?.abilities;

  // Species details
  const species = useFetchPokemonSpeciesDetails(speciesName);
  const flavorTextEntries = species?.flavor_text_entries;
  const genderRate = species?.gender_rate;
  const baseHappiness = species?.base_happiness;
  const isBaby = species?.is_baby;
  const isLegendary = species?.is_legendary;
  const isMythical = species?.is_mythical;

  // Abilities details
  const abilities = useFetchAbilities(abilityList);

  // Images
  const images = pokemonDetails?.sprites;
  const artwork = images?.other["official-artwork"].front_default;

  useEffect(() => !params.name && navigate("/"), []);

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
          <Image
            src={artwork}
            className="rounded img-fluid mx-auto d-block bg-light"
          />
        </Col>
        <Col>
          <SpeciesDesc flavorTextEntries={flavorTextEntries} />
          <GeneralInfo info={basicInfo} />
          <AbilitiesInfo abilities={abilities} />
        </Col>
      </Row>
    </Container>
  );
};

export default Pokemon;
