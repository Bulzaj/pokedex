import { useEffect, useRef, useState, useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import usePokemons from "../../../hooks/usePokemons";
import EvolutionChainTitle from "./evolutionChainTitle";
import EvolutionChainSpinner from "./evolutionChainSpinner";
import EvolutionChainContent from "./evolutionChainContent";
import EvolutionChainCollapse from "./evolutionChainCollapse";
import Section from "../../section/section";
import { scrollTop } from "../../../utils";

const EvolutionChainSection = function (props) {
  const { evolutionChain } = props;
  const pokemonNames = useMemo(
    () => evolutionChain.map((chainLink) => chainLink.speciesName),
    [evolutionChain]
  );

  const { pokemons, fetchPokemons } = usePokemons();

  useEffect(() => fetchPokemons(pokemonNames), [fetchPokemons, pokemonNames]);

  const navigate = useNavigate();
  const urlParams = useParams();
  const [selectedChainLink, setSelectedChainLink] = useState();
  const [showEvolutionInfo, setShowEvolutionInfo] = useState(false);
  const titleRef = useRef();

  const handleCaptionClick = function (pokemonName) {
    if (pokemonName === urlParams.name) return;
    navigate(`/pokemon/${pokemonName}`);
    scrollTop();
  };

  const handleInfoClick = function (chainLink) {
    if (!chainLink.evolutionDetails) return;
    if (chainLink.speciesName === selectedChainLink?.speciesName) return;
    setShowEvolutionInfo(true);
    setSelectedChainLink(chainLink);
    titleRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleCloseInfoBtnClick = function () {
    setSelectedChainLink(null);
    setShowEvolutionInfo(false);
  };

  let content = <EvolutionChainSpinner />;
  if (pokemons && props.evolutionChain) {
    content = (
      <EvolutionChainContent
        pokemons={pokemons}
        chain={evolutionChain}
        handleCaptionClick={handleCaptionClick}
        handleInfoClick={handleInfoClick}
        showEvolutionInfo={showEvolutionInfo}
      />
    );
  }

  return (
    <>
      <span ref={titleRef} />
      <Section
        bg="dark"
        text="light"
        id="evolution-chain"
        title={<EvolutionChainTitle selectedChainLink={selectedChainLink} />}
      >
        <EvolutionChainCollapse
          showEvolutionInfo={showEvolutionInfo}
          selectedChainLink={selectedChainLink}
          handleCloseInfoBtnClick={handleCloseInfoBtnClick}
        />
        {content}
      </Section>
    </>
  );
};

export default EvolutionChainSection;
