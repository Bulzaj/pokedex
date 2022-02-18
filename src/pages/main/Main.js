import { useEffect } from "react";
import PokemonList from "../../components/pokemon-list/PokemonList";
import PaginationBar from "../../components/pagination-bar/PaginationBar";
import usePokemon from "../../hooks/usePokemon";
import { scrollTop } from "../../utils";
import { PER_PAGE_LIMIT, TOTAL_RECORDS } from "../../consts";

const Main = function () {
  const pokemons = usePokemon();

  const onPageChange = function (selectedPage) {
    pokemons.fetch(selectedPage);
    scrollTop();
  };

  useEffect(() => {
    pokemons.fetch(1);
  }, []);

  return (
    <>
      <PokemonList results={pokemons.results} />
      {pokemons.results.length != 0 ? (
        <PaginationBar
          onPageChange={onPageChange}
          lastPage={Math.ceil(TOTAL_RECORDS / PER_PAGE_LIMIT)}
        />
      ) : null}
    </>
  );
};

export default Main;
