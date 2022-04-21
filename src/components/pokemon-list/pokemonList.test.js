import { render, screen } from "@testing-library/react";
import { favouritesContext } from "../../context/favouritesContext";
import PokemonList from "./pokemonList";

jest.mock("react-router-dom", () => {
  const rrdLib = jest.requireActual("react-router-dom");

  return {
    ...rrdLib,
    useNavigate: () => null,
  };
});

const fakePokemonCollection = [
  {
    types: [{ type: { name: "fire" } }, { type: { name: "water" } }],
  },
];

const fakeFavArray = ["test1", "test2"];

const renderPokemonList = function (favouritesArr, pokemonCollection) {
  return render(
    <favouritesContext.Provider value={{ favourites: favouritesArr }}>
      <PokemonList pokemonCollection={pokemonCollection} />
    </favouritesContext.Provider>
  );
};

describe("Pokemon list component", () => {
  test("renders spinner if no pokemon collection given ", () => {
    const { container } = renderPokemonList(fakeFavArray);
    const spinner = container.getElementsByClassName("spinner-border");
    expect(spinner.length).toEqual(1);
  });

  test("does not renders spinner if pokemon collection provided", () => {
    const { container } = renderPokemonList(
      fakeFavArray,
      fakePokemonCollection
    );
    const spinner = container.getElementsByClassName("spinner-border");
    expect(spinner.length).toEqual(0);
  });

  test("renders list if pokemon collection provided", () => {
    renderPokemonList(fakeFavArray, fakePokemonCollection);
    const list = screen.getByRole("list");
    expect(list).toBeInTheDocument();
  });
});
