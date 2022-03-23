import { Container } from "react-bootstrap";
import TopNavbar from "../top-navbar/TopNavbar";
import { Route, Routes } from "react-router-dom";
import Main from "../../pages/main/Main";
import Pokemon from "../../pages/pokemon/Pokemon";
import useFetchPokemonNames from "../../hooks/useFetchPokemonNames";
import { PokemonsDetailsContextProvider } from "../../context/pokemonsDetailsContext";

// TODO: Add pokemons to favourite
// TODO: create general fetch hook
// TODO: refactor add fetch hooks to use general fetch hook
// TODO: take content from pokeapi descriptions and create new main page (move pokemon list to new page)

// TODO: add global language (and version?) selection feature
// TODO: create hook for filtering languages and versions (from api response)
function App() {
  const pokemonNames = useFetchPokemonNames();

  return (
    <div className="App">
      <PokemonsDetailsContextProvider>
        <TopNavbar pokemonNames={pokemonNames} />
        <Container>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/pokemon/:name" element={<Pokemon />} />
          </Routes>
        </Container>
      </PokemonsDetailsContextProvider>
    </div>
  );
}

export default App;
