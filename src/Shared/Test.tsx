import { expect } from "vitest";

import { fireEvent, render, screen, within } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import App from "../App";

export const renderApp = () =>
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );

