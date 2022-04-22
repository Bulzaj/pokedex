import { render, screen } from "@testing-library/react";
import ImageListItem from "./imageListItem";
import ImageListItemDetails from "./imageListItemDetails";

describe("Image list item", () => {
  test("renders title if provided", () => {
    render(<ImageListItem title="test title" details={[]} />);
    const element = screen.getByText("test title");
    expect(element).toBeInTheDocument();
  });

  test("renders image if src provided", () => {
    render(<ImageListItem imgSrc="./test/img/src" details={[]} />);
    const image = screen.getByRole("img");
    expect(image).toBeInTheDocument();
  });

  test("renders bottom btn if provided", () => {
    render(<ImageListItem btnBottom={<button>test button</button>} />);
    const el = screen.getByText("test button");
    expect(el).toBeInTheDocument();
  });
});

describe("Image list item details", () => {
  test("returns null if no details prop provided", () => {
    const { container } = render(<ImageListItemDetails />);
    expect(container.firstChild).toBeNull();
  });

  test("renders if details prop provided", () => {
    render(
      <ImageListItemDetails
        details={[{ key: "testKey1", value: "testValue1" }]}
      />
    );
    const detail1 = screen.getByText("testKey1");
    expect(detail1).toBeInTheDocument();
  });
});
