import { SearchBox, getSearchBox } from "./SearchBox";

export interface SearchResult {
  // Get the search box.
  getSearchBox(): SearchBox;

  // Get the search results.
  getResults(): string[];
}

export const getSearchResults = async (): Promise<SearchResult> => {
  const searchBox = await getSearchBox();

  return {
    getSearchBox() {
      return searchBox;
    },
    getResults() {
      return [];
    },
  };
};
