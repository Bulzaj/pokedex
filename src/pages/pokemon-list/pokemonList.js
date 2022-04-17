import PaginationBar from "../../components/pagination-bar/PaginationBar";
import { scrollTop } from "../../utils";
import { PER_PAGE_LIMIT, TOTAL_RECORDS } from "../../consts";
import usePokemons from "../../hooks/usePokemons";
import { useEffect } from "react";
import CustomSpinner from "../../components/custom-spinner/customSpinner";
import PokemonGallery from "../../components/pokemon-gallery/pokemonGallery";
import Collection from "../../components/collection/collection";

const PokemonList = function () {
  const { pokemons, fetchPokemons } = usePokemons();

  useEffect(() => {
    fetchPokemons(null, {
      limit: PER_PAGE_LIMIT,
      offset: 0,
    });
  }, [fetchPokemons]);

  if (!pokemons) return <CustomSpinner />;

  const onPageChange = function (selectedPage) {
    fetchPokemons(null, { offset: PER_PAGE_LIMIT * (selectedPage - 1) });
    scrollTop();
  };

  // return (
  //   <>
  //     <PokemonGallery pokemonList={pokemons} />
  //     {pokemons.length !== 0 ? (
  //       <PaginationBar
  //         onPageChange={onPageChange}
  //         lastPage={Math.ceil(TOTAL_RECORDS / PER_PAGE_LIMIT)}
  //       />
  //     ) : null}
  //   </>
  // );

  return <Collection pokemonList={pokemons} />;
};

export default PokemonList;
