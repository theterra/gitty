import * as React from "react";
import { render, screen } from "@testing-library/react";
import PersonalInfo from "Molecules/PersonalInfo";

test("Should render the PersonalInfo component", () => {
  render(
    <PersonalInfo
      avatarUrl="https://imageurl.jpeg"
      userid="dan"
      fullname="Dany"
      bio="Js Developer"
      followers="12"
      following="23"
    />
  );

  expect(screen.getByTestId("user-information")).not.toBeNull();
  expect(screen.getByTestId("user-avatar")).not.toBeNull();
});
