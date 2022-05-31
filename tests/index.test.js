import Home from "../pages/index";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { RedeemRounded } from "@mui/icons-material";

describe('Heading', () => {
  it('Renders a heading for the landing page', () => {
    render(<Home />);

    expect(screen.getByTestId('heading')).toBeInTheDocument();
  })
})
