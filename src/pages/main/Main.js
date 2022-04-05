import PokemonList from "../../components/pokemon-list/PokemonList";
import PaginationBar from "../../components/pagination-bar/PaginationBar";
import { scrollTop } from "../../utils";
import { PER_PAGE_LIMIT, TOTAL_RECORDS } from "../../consts";
import useFetchPokemons from "../../hooks/useFetchPokemons";
import { Container, Spinner } from "react-bootstrap";

// TODO: Improve that ugly grid gallery component
const Main = function () {
  const { pokemons, fetchPokemons } = useFetchPokemons(null, {
    limit: PER_PAGE_LIMIT,
    offset: 0,
  });
  const pokemonList = pokemons?.results;

  if (!pokemonList)
    return (
      <Container
        fluid
        className="vh-100 d-flex justify-content-center align-items-center"
      >
        <Spinner size="lg" animation="border" role="status" />
      </Container>
    );

  const onPageChange = function (selectedPage) {
    fetchPokemons(null, { offset: PER_PAGE_LIMIT * (selectedPage - 1) });
    scrollTop();
  };

  return (
    <>
      <PokemonList pokemons={pokemonList} />
      {pokemonList.length !== 0 ? (
        <PaginationBar
          onPageChange={onPageChange}
          lastPage={Math.ceil(TOTAL_RECORDS / PER_PAGE_LIMIT)}
        />
      ) : null}
    </>
  );
};

export default Main;
