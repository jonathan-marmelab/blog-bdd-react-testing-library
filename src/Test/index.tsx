import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

export { getSearchBox } from "./SearchBox";

import App from "../App";

export const renderApp = () =>
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
