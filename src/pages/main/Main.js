import PokemonList from "../../components/pokemon-list/PokemonList";
import PaginationBar from "../../components/pagination-bar/PaginationBar";
import { scrollTop } from "../../utils";
import { PER_PAGE_LIMIT, TOTAL_RECORDS } from "../../consts";
import usePokemons from "../../hooks/usePokemons";
import { useEffect } from "react";
import CustomSpinner from "../../components/custom-spinner/customSpinner";
import PokemonGallery from "../../components/pokemon-gallery/pokemonGallery";

// TODO: Improve that ugly grid gallery component
const Main = function () {
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

  return <PokemonGallery pokemonList={pokemons} />;

  // return (
  //   <>
  //     <PokemonList pokemons={pokemons} />
  //     {pokemons.length !== 0 ? (
  //       <PaginationBar
  //         onPageChange={onPageChange}
  //         lastPage={Math.ceil(TOTAL_RECORDS / PER_PAGE_LIMIT)}
  //       />
  //     ) : null}
  //   </>
  // );
};

export default Main;
