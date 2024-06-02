import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import Page from "../page";

describe("Page", () => {
  it("renders Page component", () => {
    render(
      <Page>
        <h1>Test</h1>
      </Page>
    );

    const heading = screen.getByRole("heading", { level: 1 });

    expect(heading).toBeInTheDocument();
  });
});
