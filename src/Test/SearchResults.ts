import { screen } from "@testing-library/react";
import { expect } from "vitest";

export interface SearchResult {
  // Get the search results
  getResults(): Promise<string[]>;

  // Get the search error
  getError(): Promise<string>;
}

export const getSearchResults = async (): Promise<SearchResult> => {
  return {
    async getResults() {
      const searchResultItems = await screen.findAllByRole("listitem");
      for (const searchResultItem of searchResultItems) {
        expect(searchResultItem).toBeVisible();
      }
      return searchResultItems.map((listitem) => listitem.textContent!.trim());
    },
    async getError() {
      const searchResultAlert = await screen.findByRole("alert");
      expect(searchResultAlert).toBeVisible();
      return searchResultAlert.textContent!.trim();
    },
  };
};
