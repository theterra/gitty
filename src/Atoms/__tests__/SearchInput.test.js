import * as React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import SearchInput from "Atoms/SearchInput";

test("Should render the SearchInput component", () => {
  render(<SearchInput />);
  expect(screen.getByTestId("search-input")).not.toBeNull();
});

test("Should fire the onSearchChange handler when onChange event is triggered", () => {
  const mockOnChange = jest.fn(({ target: { value } }) => {
    expect(value).toEqual("Sd");
  });
  render(<SearchInput onSearchChange={mockOnChange} />);
  const searchInput = screen.getByTestId("search-input");
  fireEvent.change(searchInput, { target: { value: "Sd" } });
  expect(mockOnChange).toBeCalled();
});
