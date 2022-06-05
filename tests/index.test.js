// Tests the index.js file.

import Home from "../src/pages/index";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

describe('Heading', () => {
  it('Renders a heading for the landing page', () => {
    render(<Home />);

    expect(screen.getByTestId('heading')).toBeInTheDocument();
  })
})
