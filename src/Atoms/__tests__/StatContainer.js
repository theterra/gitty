import { render, screen } from "@testing-library/react";
import StatContainer from "Atoms/StatContainer";

test("Should render the StatContainer component", () => {
  render(<StatContainer title="Languages" />);
  expect(screen.getByTestId("stat-container")).not.toBeNull();
  expect(screen.getByTestId("stat-title")).toHaveTextContent("Languages");
});

test("Should render Children in the StatContainer component", () => {
  render(
    <StatContainer title="Languages">
      <div data-testid="stat-child">Test element</div>
    </StatContainer>
  );
  expect(screen.getByTestId("stat-child")).not.toBeNull();
  expect(screen.getByTestId("stat-child")).toHaveTextContent("Test element");
});
