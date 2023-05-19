interface SearchBox {
  // Type a search in the searchbox
  type(search: string): void;

  // Submit the search form
  submit(): void;

  // Get the search box value.
  getValue(): string;
}

export const getSearchBox = async (): Promise<SearchBox> => {
  return {
    type() {},
    submit() {},
    getValue() {
      return "";
    },
  };
};
