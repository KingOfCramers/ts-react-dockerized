import React from "react";
import { render } from "@testing-library/react";
import NotFound from "./NotFound";

describe("NotFound", () => {
  it("should render the NotFound view", () => {
    const { getByText } = render(<NotFound />);
    expect(getByText("Sorry, that page could not be found"));
  });
});
