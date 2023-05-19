import matchers from "@testing-library/jest-dom/matchers";
import { cleanup } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";

// Setup test environment.
expect.extend(matchers);
afterEach(cleanup);

import { getSearchBox, renderApp } from "../Test";

// Setup @testing-library/react environment.
expect.extend(matchers);
afterEach(cleanup);

describe("Home", () => {
  it("Should display search bar", async () => {
    // We render the app, which opens the home page by default.
    renderApp();

    // We ensure that the user sees the search form.
    await getSearchBox();
  });
});
