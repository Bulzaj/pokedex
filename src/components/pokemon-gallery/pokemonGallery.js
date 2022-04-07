import { useEffect, useMemo } from "react";
import usePokemons from "../../hooks/usePokemons";
import Gallery from "../gallery/gallery";
import PokemonCard from "../pokemon-card/PokemonCard";

const PokemonGallery = function (props) {
  const { pokemons, fetchPokemons } = usePokemons();
  const { pokemonList } = props;

  const pokemonNames = useMemo(
    () => pokemonList?.map((pokemon) => pokemon.name),
    [pokemonList]
  );

  const itemWrapper = (item) => {
    return <PokemonCard pokemon={item} />;
  };

  const isTall = function (item) {
    const imageSrc = item.sprites.other.dream_world.front_default;
    const img = new Image();
    img.src = imageSrc;
    const h = img.height;
    if (h >= 300) return true;
  };

  const isWide = function (item) {
    const imageSrc = item.sprites.other.dream_world.front_default;
    const img = new Image();
    img.src = imageSrc;
    const w = img.width;
    if (w >= 300) return true;
  };

  const itemKey = (item) => item.name;

  useEffect(() => {
    fetchPokemons(pokemonNames);
  }, [fetchPokemons, pokemonNames]);

  return (
    <Gallery
      items={pokemons}
      itemKey={itemKey}
      itemWrapper={itemWrapper}
      isTall={isTall}
      isWide={isWide}
    />
  );
};

export default PokemonGallery;
