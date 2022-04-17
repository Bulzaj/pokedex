import PokemonGallery from "../pokemon-gallery/pokemonGallery";
import COLLECTION_TYPES from "./collectionTypes";
import PokemonCollectionError from "../../errors/pokemonCollectionError";
import PokemonList from "../pokemon-list/pokemonList";

const renderCollection = function (collectionName, pokemonCollection) {
  if (collectionName === COLLECTION_TYPES[0])
    return <PokemonGallery pokemonCollection={pokemonCollection} />;
  if (collectionName === COLLECTION_TYPES[1])
    return <PokemonList pokemonCollection={pokemonCollection} />;
  throw new PokemonCollectionError(
    `Collection type: ${collectionName} does not exists`
  );
};

export default renderCollection;
