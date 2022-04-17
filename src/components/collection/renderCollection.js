import PokemonGallery from "../pokemon-gallery/pokemonGallery";
import COLLECTION_TYPES from "./collectionTypes";
import PokemonCollectionError from "../../errors/pokemonCollectionError";

const renderCollection = function (collectionName, pokemonCollection) {
  if (collectionName === COLLECTION_TYPES[0])
    return <PokemonGallery pokemonCollection={pokemonCollection} />;
  throw new PokemonCollectionError(
    `Collection type: ${collectionName} does not exists`
  );
};

export default renderCollection;
