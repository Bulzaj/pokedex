import { render, screen } from "@testing-library/react";
import PokemonCards from "./pokemonCards";
import { favouritesContext } from "../../context/favouritesContext";

jest.mock("react-router-dom", () => {
  const rrdLib = jest.requireActual("react-router-dom");

  return {
    ...rrdLib,
    useNavigate: () => null,
  };
});

const fakePokemonCollection = [
  { types: [{ type: { name: "rock" } }, { type: { name: "papper" } }] },
];

const fakeFavourites = { favourites: [] };

const renderPokemonCards = function (pokemonCollection) {
  return render(
    <favouritesContext.Provider value={fakeFavourites}>
      <PokemonCards pokemonCollection={pokemonCollection} />
    </favouritesContext.Provider>
  );
};

describe("Pokemon cards component", () => {
  test("renders if pokemon collection prop prvided", () => {
    const { container } = renderPokemonCards(fakePokemonCollection);
    expect(container.firstChild).not.toBeNull();
  });
});
