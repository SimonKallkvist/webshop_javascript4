import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App Componenet", () => {
  it("should have a heading", () => {
    render(<App />);
    const heading = screen.getByRole("heading", { name: /näthandel/i });
    expect(heading).toBeInTheDocument();
  });
});
