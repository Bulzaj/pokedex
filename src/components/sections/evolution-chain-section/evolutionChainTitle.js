import { capitalizeFirstLetter } from "../../../utils";

const EvolutionChainTitle = function (props) {
  const { selectedChainLink } = props;

  return selectedChainLink
    ? `${capitalizeFirstLetter(
        selectedChainLink.speciesName
      )} evolution details`
    : "Evolution chain";
};

export default EvolutionChainTitle;
