import { fireEvent, screen } from "@testing-library/react";
import { expect } from "vitest";

export interface SearchBox {
  // Type a search in the searchbox
  type(search: string): void;

  // Submit the search form with the given query
  doSearch(search: string): void;

  // Get the search box value.
  getValue(): string;
}

export const getSearchBox = async (): Promise<SearchBox> => {
  // We ensure that the search box is present.
  const searchBox: HTMLInputElement = await screen.findByRole("searchbox");
  expect(searchBox).toBeVisible();

  // We ensure that the search submit button is present.
  const searchButton: HTMLButtonElement = await screen.findByRole("button", {
    name: "Search",
  });
  expect(searchButton).toBeVisible();

  return {
    type(search: string) {
      fireEvent.change(searchBox, { target: { value: search } });
    },
    doSearch(search: string) {
      fireEvent.change(searchBox, { target: { value: search } });
      fireEvent.click(searchButton);
    },
    getValue() {
      return searchBox.value;
    },
  };
};
