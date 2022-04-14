import { render } from "@testing-library/react";
import CustomSpinner from "./customSpinner";

describe("Custom spinner component", () => {
  test('has "vh-100" class when getting appropriate props', () => {
    const { container } = render(<CustomSpinner vh100 />);
    expect(container.getElementsByClassName("vh-100").length).toBe(1);
  });
  test('has not "vh-100" class without appropriate props', () => {
    const { container } = render(<CustomSpinner />);
    expect(container.getElementsByClassName("vh-100").length).toBe(0);
  });
});
