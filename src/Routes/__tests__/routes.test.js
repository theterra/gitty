import * as React from "react";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import Routes from "../index";

test("Should render the UserDetails Page", () => {
  window.history.pushState({}, "UserDetails Page", "/");
  render(
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );

  expect(screen.getByTestId("search-input")).not.toBeNull();
});
