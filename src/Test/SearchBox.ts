interface SearchBox {
  type(search: string): Promise<void>;
  submit(): Promise<void>;
}

export const getSearchBox = async (): Promise<SearchBox> => {
  return {
    async type() {},
    async submit() {},
  };
};
