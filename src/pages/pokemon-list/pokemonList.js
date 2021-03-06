import PaginationBar from "../../components/pagination-bar/PaginationBar";
import { scrollTop } from "../../utils";
import { PER_PAGE_LIMIT, TOTAL_RECORDS } from "../../consts";
import usePokemons from "../../hooks/usePokemons";
import { useEffect } from "react";
import CustomSpinner from "../../components/custom-spinner/customSpinner";
import Collection from "../../components/collection/collection";
import { Container } from "react-bootstrap";

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

  return (
    <>
      <Container>
        <h3 className="display-3">Pokemon list</h3>
        <Collection pokemonList={pokemons} />
      </Container>
      {pokemons.length !== 0 ? (
        <PaginationBar
          onPageChange={onPageChange}
          lastPage={Math.ceil(TOTAL_RECORDS / PER_PAGE_LIMIT)}
        />
      ) : null}
    </>
  );
};

export default PokemonList;
