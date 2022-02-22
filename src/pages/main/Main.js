import PokemonList from "../../components/pokemon-list/PokemonList";
import PaginationBar from "../../components/pagination-bar/PaginationBar";
import useFetchPokemonList from "../../hooks/useFetchPokemonList";
import { scrollTop } from "../../utils";
import { PER_PAGE_LIMIT, TOTAL_RECORDS } from "../../consts";

const Main = function () {
  const pokemonList = useFetchPokemonList();

  const onPageChange = function (selectedPage) {
    pokemonList.fetch(selectedPage);
    scrollTop();
  };

  return (
    <>
      <PokemonList results={pokemonList.results} />
      {pokemonList.results.length !== 0 ? (
        <PaginationBar
          onPageChange={onPageChange}
          lastPage={Math.ceil(TOTAL_RECORDS / PER_PAGE_LIMIT)}
        />
      ) : null}
    </>
  );
};

export default Main;
