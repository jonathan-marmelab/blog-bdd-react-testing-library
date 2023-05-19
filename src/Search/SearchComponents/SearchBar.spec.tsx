import matchers from "@testing-library/jest-dom/matchers";
import { cleanup, render } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import { getSearchBox } from "../../Test";
import { SearchBar } from "./SearchBar";

// Setup @testing-library/react environment.
expect.extend(matchers);
afterEach(cleanup);

describe("SearchBar", () => {
  it("Should display query in search box if provided", async () => {
    const query = "John";

    render(<SearchBar query={query} />);

    const searchBox = await getSearchBox();
    expect(searchBox.getValue()).toBe(query);
  });

  it("Should support user search query", async () => {
    const query = "John";
    const handleSearch = vi.fn();

    render(<SearchBar query={query} handleSearch={handleSearch} />);

    const searchBox = await getSearchBox();
    searchBox.doSearch(query);

    expect(searchBox.getValue()).toBe(query);
    // We test that the search hadler has been called.
    expect(handleSearch).toHaveBeenCalledWith(query);
  });
});
