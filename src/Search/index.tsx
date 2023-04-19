import { Route } from "react-router-dom";

export { SearchBar } from "./SearchComponents";

import { SearchResult } from "./SearchPages";

export const SearchRoutes = [
  <Route path="search" element={<SearchResult />} />,
];

