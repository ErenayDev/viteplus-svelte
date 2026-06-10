import { expect, test } from "vite-plus/test";
import { sum } from "./+page.svelte";

test("Multiplier", () => {
  let count = $state(0);
  let summed = sum(() => count, 1);
  expect(summed.value).toEqual(1);
  count = 9;
  expect(summed.value).toEqual(10);
});
