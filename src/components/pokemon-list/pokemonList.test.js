import { render, screen } from "@testing-library/react";
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

describe("Pokemon list component", () => {
  test("renders spinner if no pokemon collection given ", () => {
    const { container } = render(<PokemonList />);
    const spinner = container.getElementsByClassName("spinner-border");
    expect(spinner.length).toEqual(1);
  });

  test("does not renders spinner if pokemon collection provided", () => {
    const { container } = render(
      <PokemonList pokemonCollection={fakePokemonCollection} />
    );
    const spinner = container.getElementsByClassName("spinner-border");
    expect(spinner.length).toEqual(0);
  });

  test("renders list if pokemon collection provided", () => {
    render(<PokemonList pokemonCollection={fakePokemonCollection} />);
    const list = screen.getByRole("list");
    expect(list).toBeInTheDocument();
  });
});
