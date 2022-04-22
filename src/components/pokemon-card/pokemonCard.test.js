import { getByText, render, screen } from "@testing-library/react";
import PokemonCard from "./pokemonCard";
import { favouritesContext } from "../../context/favouritesContext";

const renderPokemonCard = function () {
  return render(
    <favouritesContext.Provider value={{ favourites: [] }}>
      <PokemonCard
        onCardClick={() => "clicked"}
        imgSrc="./test/img/src"
        name="testName"
        types={[{ type: { name: "scissors" } }, { type: { name: "papper" } }]}
        baseExperience={81}
        height={9}
        weight={21}
      />
    </favouritesContext.Provider>
  );
};

describe("Pokemon card component", () => {
  test("renders img with provided src ", () => {
    renderPokemonCard();
    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("src", "./test/img/src");
  });

  test("renders title", () => {
    renderPokemonCard();
    const title = screen.getByText("TestName");
    expect(title).toBeInTheDocument();
  });

  test("renders pokemon types", () => {
    renderPokemonCard();
    const types = screen.getByText("Scissors Papper");
    expect(types).toBeInTheDocument();
  });

  test("renders base exp", () => {
    renderPokemonCard();
    const p = screen.getByText("Base experience:").parentElement;
    expect(p.textContent).toEqual("Base experience: 81");
  });

  test("renders height", () => {
    renderPokemonCard();
    const p = screen.getByText("Height:").parentElement;
    expect(p.textContent).toEqual("Height: 90 cm");
  });

  test("renders weight", () => {
    renderPokemonCard();
    const p = screen.getByText("Weight:").parentElement;
    expect(p.textContent).toEqual("Weight: 2.1 kg");
  });

  test("renders fav btn", () => {
    renderPokemonCard();
    const favBtn = screen.getByRole("button", { name: "Add to favourites" });
    expect(favBtn).toBeInTheDocument();
  });
});
