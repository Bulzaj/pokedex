import TopNavbar from "../top-navbar/TopNavbar";
import { Route, Routes } from "react-router-dom";
import Pokemon from "../../pages/pokemon/Pokemon";
import usePokemons from "../../hooks/usePokemons";
import { TOTAL_RECORDS } from "../../consts";
import { useEffect } from "react";
import Favourites from "../../pages/favourites/favourites";
import FavouritesContextProvider from "../../context/favouritesContext";
import PokemonList from "../../pages/pokemon-list/pokemonList";
import Landing from "../../pages/landing/landing";

// TODO: typo - in the plural, pokemon is still pokemon :(

// TODO: create collection component that manage how to display data (eg. gallery, cards or list)

// TODO: create wider and taller gallery items;

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

// TODO: transform util functions to services

// TODO: create photo gallery with starsalts images

// TODO: expand landing page (use context from pokeapi)

function App() {
  const { pokemons, fetchPokemons } = usePokemons();
  const pokemonNames = pokemons?.map((pokemon) => pokemon.name);

  useEffect(
    () => fetchPokemons(null, { limit: TOTAL_RECORDS }),
    [fetchPokemons]
  );

  return (
    <div className="App">
      <FavouritesContextProvider>
        <TopNavbar pokemonNames={pokemonNames} />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/pokemon-list" element={<PokemonList />} />
          <Route path="/pokemon/:name" element={<Pokemon />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
      </FavouritesContextProvider>
    </div>
  );
}

export default App;
