import {
  fireEvent,
  getByRole,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import FavButton from "./favButton";
import { favouritesContext } from "../../context/favouritesContext";
import userEvent from "@testing-library/user-event";

const renderFavBtn = function (
  pokemonName,
  favouriteList = ["testPoke1", "testPoke2"]
) {
  return render(
    <favouritesContext.Provider
      value={{
        favourites: favouriteList,
        add: function () {},
        remove: function () {},
      }}
    >
      <FavButton pokemonName={pokemonName} />
    </favouritesContext.Provider>
  );
};

describe("Fav button component", () => {
  test("renders itself", () => {
    const { container } = renderFavBtn();
    expect(container.children).not.toBeNull();
  });

  test('renders "add to favourites" when !not clicked', () => {
    renderFavBtn([]);
    const element = screen.getByText("Add to favourites");
    expect(element).toBeInTheDocument();
  });

  test('renders "Remove from favourites" when current pokemon is in favourites', async () => {
    renderFavBtn("testPoke1", ["testPoke1"]);
    const addBtn = screen.getByText("Remove from favourites");
    expect(addBtn).toBeInTheDocument();
  });
});
