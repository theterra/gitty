import * as React from "react";
import { render, screen } from "@testing-library/react";
import ListItem from "Atoms/ListItem";
import { FiUsers } from "react-icons/fi";

test("Should render the list item component", () => {
  render(<ListItem value="20" label="Followers" icon={FiUsers} />);
  expect(screen.getByTestId("item-value")).toHaveTextContent("20");
  expect(screen.getByTestId("item-label")).toHaveTextContent("Followers");
  expect(screen.getByTestId("item-icon")).not.toBeNull();
});

test("Should not render the icon comonent when icon is not passed in props", () => {
  render(<ListItem value="30" label="Following" />);
  expect(screen.getByTestId("item-value")).toHaveTextContent("30");
  expect(screen.getByTestId("item-label")).toHaveTextContent("Following");
  expect(screen.queryByTestId("item-icon")).toBeNull();
});
