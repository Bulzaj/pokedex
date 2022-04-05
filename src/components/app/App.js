import { Container } from "react-bootstrap";
import TopNavbar from "../top-navbar/TopNavbar";
import { Route, Routes } from "react-router-dom";
import Main from "../../pages/main/Main";
import Pokemon from "../../pages/pokemon/Pokemon";
import useFetchPokemons from "../../hooks/useFetchPokemons";
import { TOTAL_RECORDS } from "../../consts";

// TODO: Add pokemons to favourite
// TODO: create general fetch hook
// TODO: refactor add fetch hooks to use general fetch hook
// TODO: take content from pokeapi descriptions and create new main page (move pokemon list to new page)

// TODO: add global language (and version?) selection feature
// TODO: create hook for filtering languages and versions (from api response)

// TODO: add pokemon comparing feature

// TODO: insert link to megaform if has one

// FIXME: buton size on mobile
function App() {
  const { pokemons } = useFetchPokemons(null, { limit: TOTAL_RECORDS });
  const pokemonNames = pokemons?.results.map((pokemon) => pokemon.name);

  return (
    <div className="App">
      <TopNavbar pokemonNames={pokemonNames} />
      <Container>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/pokemon/:name" element={<Pokemon />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
