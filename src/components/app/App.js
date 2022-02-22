import { Container } from "react-bootstrap";
import TopNavbar from "../top-navbar/TopNavbar";
import { Route, Routes } from "react-router-dom";
import Main from "../../pages/main/Main";
import Pokemon from "../../pages/pokemon/Pokemon";
import useFetchPokemonNames from "../../hooks/useFetchPokemonNames";

function App() {
  const pokemonNames = useFetchPokemonNames();

  return (
    <div className="App">
      <TopNavbar pokemonNames={pokemonNames} />
      <Container className="mt-3" fluid>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/pokemon/:name" element={<Pokemon />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
