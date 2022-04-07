import { Container } from "react-bootstrap";
import TopNavbar from "../top-navbar/TopNavbar";
import { Route, Routes } from "react-router-dom";
import Main from "../../pages/main/Main";
import Pokemon from "../../pages/pokemon/Pokemon";
import usePokemons from "../../hooks/usePokemons";
import { TOTAL_RECORDS } from "../../consts";
import { useEffect } from "react";
import Favourites from "../../pages/favourites/favourites";

// TODO: Add pokemons to favourite
// TODO: Create badge next to link with favourites count

// TODO: take content from pokeapi descriptions and create new main page (move pokemon list to new page)

// TODO: add global language (and version?) selection feature
// TODO: create hook for filtering languages and versions (from api response)

// TODO: add pokemon comparsion feature

// TODO: insert link to megaform if has one

// TODO: create image component with placeholder when loading

// TODO: use sass to create better type colors variants

// FIXME: fix pagination bar current page number display

// FIXME: buton size on mobile

// TODO: mention about locations

// TODO: mention about moves

// TODO: create new section in pokemon page with listed generations where pokemon occurs

function App() {
  const { pokemons, fetchPokemons } = usePokemons();
  const pokemonNames = pokemons?.map((pokemon) => pokemon.name);

  useEffect(
    () => fetchPokemons(null, { limit: TOTAL_RECORDS }),
    [fetchPokemons]
  );

  return (
    <div className="App">
      <TopNavbar pokemonNames={pokemonNames} />
      <Container>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/pokemon/:name" element={<Pokemon />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
