export interface SearchResult {
  // Get the search results
  getResults(): Promise<string[]>;

  // Get the search error
  getError(): Promise<string>;
}

export const getSearchResults = async (): Promise<SearchResult> => {
  return {
    async getResults() {
      return [];
    },
    async getError() {
      return "";
    },
  };
};
