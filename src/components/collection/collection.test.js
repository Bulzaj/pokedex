import { render, screen } from "@testing-library/react";
import PokemonGallery from "../pokemon-gallery/pokemonGallery";
import CollectionPicker from "./collectionPicker";
import getCollectionTypeItem from "./getCollectionTypeItem";
import renderCollection from "./renderCollection";

describe("Collection picker component", () => {
  test('renders "Gallery" title', () => {
    render(<CollectionPicker selectedType="gallery" />);
    const el = screen.getByText("Gallery");
    expect(el).toBeInTheDocument();
  });
  test('renders "List" title', () => {
    render(<CollectionPicker selectedType="list" />);
    const el = screen.getByText("List");
    expect(el).toBeInTheDocument();
  });
  test('renders "Cards" title', () => {
    render(<CollectionPicker selectedType="cards" />);
    const el = screen.getByText("Cards");
    expect(el).toBeInTheDocument();
  });
});

describe("Get collection type item function", () => {
  test("returns gallery item", () => {
    const result = getCollectionTypeItem("gallery");
    render(result);
    const el = screen.getByText("Gallery");
    expect(el).toBeInTheDocument();
  });
  test("returns list item", () => {
    const result = getCollectionTypeItem("list");
    render(result);
    const el = screen.getByText("List");
    expect(el).toBeInTheDocument();
  });
  test("returns cards item", () => {
    const result = getCollectionTypeItem("cards");
    render(result);
    const el = screen.getByText("Cards");
    expect(el).toBeInTheDocument();
  });
});

describe("Render collection function", () => {
  test('returns "Pokemon gallery" component', () => {
    const result = renderCollection("gallery");
    expect(result).toEqual(<PokemonGallery />);
  });
  test('returns "Pokemon list" component', () => {
    const result = renderCollection("list");
    expect(result).toEqual(<PokemonList />);
  });
  test('returns "Pokemon gallery" component', () => {
    const result = renderCollection("cards");
    expect(result).toEqual(<PokemonCards />);
  });
});
