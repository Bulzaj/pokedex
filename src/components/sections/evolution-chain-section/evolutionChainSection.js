import { useEffect, useRef, useState, useMemo } from "react";
import { Container } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import usePokemons from "../../../hooks/usePokemons";
import EvolutionChainTitle from "./evolutionChainTitle";
import EvolutionChainSpinner from "./evolutionChainSpinner";
import EvolutionChainContent from "./evolutionChainContent";
import EvolutionChainCollapse from "./evolutionChainCollapse";
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

  const handleFigureClick = function (pokemonName) {
    if (pokemonName === urlParams.name) return;
    navigate(`/pokemon/${pokemonName}`);
    scrollTop();
  };

  const handleInfoBtnClick = function (chainLink) {
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
        handleFigureClick={handleFigureClick}
        handleInfoBtnClick={handleInfoBtnClick}
        showEvolutionInfo={showEvolutionInfo}
      />
    );
  }

  return (
    <Container className="bg-dark text-light rounded p-2">
      <h3 ref={titleRef} className="display-3">
        <EvolutionChainTitle />
      </h3>
      <EvolutionChainCollapse
        showEvolutionInfo={showEvolutionInfo}
        selectedChainLink={selectedChainLink}
        handleCloseInfoBtnClick={handleCloseInfoBtnClick}
      />
      {content}
    </Container>
  );
};

export default EvolutionChainSection;
