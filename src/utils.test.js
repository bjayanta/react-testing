import { describe, expect, it } from "vitest";
import { range } from "./utils";

describe("utils", () => {
  describe("range", () => {
    it("returns correct result from 1-6", () => {
      const result = range(1, 6);
      // expect(result).toEqual(1); // Fail
      expect(result).toEqual([1, 2, 3, 4, 5]); // Success
    });

    it("returns correct result from 41-45", () => {
      const result = range(41, 45);
      expect(result).toEqual([41, 42, 43, 44]); // Success
    });
  });

  describe("sample", () => {
    it("checks that 1 equals 1", () => {
      expect(1).toEqual(1);
    });
  });
});
