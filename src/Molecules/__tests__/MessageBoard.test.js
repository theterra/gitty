import * as React from "react";
import { render, screen } from "@testing-library/react";
import MessageBoard from "Molecules/MessageBoard";
import { FiUsers } from "react-icons/fi";

test("Should render the MessageBoard component", () => {
  render(<MessageBoard component={FiUsers} title="Test Message" />);
  expect(screen.getByTestId("board-title")).toHaveTextContent("Test Message");
  expect(screen.getByTestId("message-board")).not.toBeNull();
});
