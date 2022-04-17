import { render, screen } from "@testing-library/react";
import CollectionPicker from "./collectionPicker";

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
