import { render, screen } from "@testing-library/react";
import SkeletonLoader from "Atoms/SkeletonLoader";

test("Should render the SkeletonLoader component", () => {
  render(<SkeletonLoader />);
  expect(screen.getByTestId("skeleton-loader")).not.toBeNull()
  expect(screen.getAllByTestId("skeleton-item")).toHaveLength(3);
});
