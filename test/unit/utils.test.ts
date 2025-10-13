// Pure unit test - fast, no Nuxt runtime
import { describe, expect, it } from "vitest";

import { formatDate } from "../../app/utils";

describe("formatDate utility", () => {
  it("should format date correctly", () => {
    const date = "2024-01-15";
    const result = formatDate(date);
    expect(result).toContain("Jan");
  });

  it("should handle invalid dates", () => {
    const invalidDate = "invalid-date";
    const result = formatDate(invalidDate);
    expect(result).toBe("Invalid Date");
  });
});
