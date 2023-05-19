import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "../App";

export { getSearchBox } from "./SearchBox";
export { getSearchResults } from "./SearchResults";

export const renderApp = () =>
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
