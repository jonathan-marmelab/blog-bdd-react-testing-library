export interface SearchBox {
  // Type a search in the searchbox
  type(search: string): void;

  // Submit the search form with the given query
  doSearch(search: string): void;

  // Get the search box value.
  getValue(): string;
}

export const getSearchBox = async (): Promise<SearchBox> => {
  return {
    type() {},
    doSearch() {},
    getValue() {
      return "";
    },
  };
};
