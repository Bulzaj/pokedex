import { useEffect, useMemo } from "react";
import { Image as Img } from "react-bootstrap";
import usePokemons from "../../hooks/usePokemons";
import Gallery from "../gallery/gallery";
import getImageDimmensions from "../../getImgDimmensions";

const PokemonGallery = function (props) {
  const { pokemons, fetchPokemons } = usePokemons();
  const { pokemonList } = props;

  const pokemonNames = useMemo(
    () => pokemonList?.map((pokemon) => pokemon.name),
    [pokemonList]
  );

  const itemWrapper = (item) => {
    const imageSrc = item.sprites.other.dream_world.front_default;
    return (
      <Img
        className="bg-dark"
        style={{ width: "100%", height: "100%" }}
        src={imageSrc}
      />
    );
  };

  const spanWidth = function (item) {
    const src = item.sprites.other.dream_world.front_default;
    const dimm = getImageDimmensions(src);
    // if (dimm.w >= 400) return 2;
    if (dimm.w / dimm.h > 1.2) return 2;
    return 1;
  };

  const spanHeight = function (item) {
    const src = item.sprites.other.dream_world.front_default;
    const dimm = getImageDimmensions(src);
    // if (dimm.h >= 400) return 2;
    if (dimm.h / dimm.w > 1.2) return 2;
    return 1;
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
      spanWidth={spanWidth}
      spanHeight={spanHeight}
    />
  );
};

export default PokemonGallery;
