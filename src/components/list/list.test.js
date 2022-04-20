import { render, screen } from "@testing-library/react";
import List from "./list";
import ListItem from "./listItem";
import ListItems from "./listItems";

const testItems = ["item1", "item2", "item3"];
const testItemWrapper = () => {};
const testItemKey = () => {};

describe("List item component", () => {
  test("renders", () => {
    const testWrapper = <h1>Test wrapper</h1>;
    render(<ListItem itemWrapper={testWrapper} />);
    const el = screen.getByText("Test wrapper");
    expect(el).toBeInTheDocument();
  });
});

describe("List items component", () => {
  test("renders given number of times", () => {
    render(
      <ListItems items={testItems} itemWrapper={() => {}} itemKey={() => {}} />
    );
    const elemets = screen.getAllByRole("button");
    expect(elemets.length).toEqual(3);
  });
});

describe("List component", () => {
  test("renders", () => {
    render(
      <List
        items={testItems}
        itemWrapper={testItemWrapper}
        itemKey={testItemKey}
      />
    );
    const ulElement = screen.getByRole("list");
    expect(ulElement).toBeInTheDocument();
  });
});
