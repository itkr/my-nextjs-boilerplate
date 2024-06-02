import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Layout from "../layout";

describe("Layout", () => {
  it("renders Layout component", () => {
    render(
      <Layout>
        <h1>Test</h1>
      </Layout>
    );

    const heading = screen.getByRole("heading", { level: 1 });

    expect(heading).toBeInTheDocument();
  });
});
