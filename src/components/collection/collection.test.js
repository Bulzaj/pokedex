import { render, screen } from "@testing-library/react";
import CollectionPicker from "./collectionPicker";
import getCollectionTypeItem from "./getCollectionTypeItem";

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
