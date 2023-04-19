import matchers from "@testing-library/jest-dom/matchers";
import { cleanup } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";

// Setup @testing-library/react environment.
expect.extend(matchers);
afterEach(cleanup);

describe("Home", () => {
  it("Should display search bar", async () => {});
});
