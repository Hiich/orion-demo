import { describe, it, expect } from "vitest";
import { formatDate, formatDateFr } from "../src/format-date.js";

describe("formatDate", () => {
  it("should format a date as YYYY-MM-DD", () => {
    const date = new Date(2024, 2, 15); // March 15, 2024 (month is 0-indexed)
    expect(formatDate(date)).toBe("2024-03-15");
  });

  it("should pad single-digit months and days", () => {
    const date = new Date(2024, 0, 5); // January 5, 2024
    expect(formatDate(date)).toBe("2024-01-05");
  });

  it("should handle December correctly", () => {
    const date = new Date(2024, 11, 25); // December 25, 2024
    expect(formatDate(date)).toBe("2024-12-25");
  });

  it("should handle the last day of the year", () => {
    const date = new Date(2024, 11, 31);
    expect(formatDate(date)).toBe("2024-12-31");
  });
});

describe("formatDateFr", () => {
  it("should format a date in French", () => {
    const date = new Date(2024, 2, 15);
    expect(formatDateFr(date)).toBe("15 mars 2024");
  });

  it("should handle January", () => {
    const date = new Date(2024, 0, 1);
    expect(formatDateFr(date)).toBe("1 janvier 2024");
  });
});
