import { fireEvent, render, screen } from "@testing-library/react";
import ClearButton from "./clearButton";
import { favouritesContext } from "../../context/favouritesContext";

const setContextValue = function (pokemonList) {
  return { favourites: pokemonList };
};

const renderClearButton = function (pokemonList) {
  render(
    <favouritesContext.Provider value={setContextValue(pokemonList)}>
      <ClearButton />
    </favouritesContext.Provider>
  );
};

describe("Clear button component", () => {
  test("renders button if favourite array is not empty", () => {
    renderClearButton(["pokemon1", "pokemon2"]);
    const clearBtn = screen.getByText("Clear");
    expect(clearBtn).toBeInTheDocument();
  });
  test("returns null if favourite array is empty", () => {
    renderClearButton([]);
    const clearBtn = screen.queryByText("Clear");
    expect(clearBtn).toBeNull();
  });
  test("opens prompt when button clicked", () => {
    const promptMock = jest.spyOn(window, "prompt");
    renderClearButton(["pokemon1"]);
    const clearBtn = screen.getByText("Clear");
    fireEvent.click(clearBtn);
    expect(promptMock).toHaveBeenCalledTimes(1);
  });
});
