import matchers from "@testing-library/jest-dom/matchers";
import { cleanup } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";

import { getSearchBox, getSearchResults, renderApp } from "../Test";

// Setup test environment.
expect.extend(matchers);
afterEach(cleanup);

describe("SearchResult", () => {
  it("Should display search results", async () => {
    renderApp();

    const searchBox = await getSearchBox();
    searchBox.doSearch("John");

    const searchResults = await getSearchResults();

    expect(searchResults.getResults()).resolves.toStrictEqual([
      "Nancy Johnson",
      "John Smith",
    ]);
  });

  it("Should display an error if the search query is not valid", async () => {
    renderApp();

    const searchBox = await getSearchBox();
    searchBox.doSearch("a");

    const searchResults = await getSearchResults();
    expect(searchResults.getError()).resolves.toBe(
      "Query must be at least 2 characters long."
    );
  });
});
