// Tests the index.js file.

import Home from "../pages/index";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

describe('Heading', () => {
  it('Renders a heading for the landing page', () => {
    render(<Home />);

    expect(screen.getByTestId('heading')).toBeInTheDocument();
  })
})
