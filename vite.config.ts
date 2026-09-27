import { defineConfig } from "vite-plus";
import { sveltekit } from "@sveltejs/kit/vite";

export default defineConfig({
  plugins: [sveltekit()],
  staged: {
    "*": "vp check --fix",
  },
  lint: {
    ignorePatterns: ["**/*.test.svelte.ts", "**/*.spec.svelte.ts"],
    options: { typeAware: true, typeCheck: true },
  },
  test: {
    // Vitest v4 compatibility: preserve mock call history.
    // Remove after tests no longer rely on calls from setup or earlier tests.
    // https://viteplus.dev/guide/vitest-v5#remove-unneeded-compatibility-settings
    // https://vitest.dev/guide/migration/#clearmocks-is-enabled-by-default
    clearMocks: false,
    include: ["src/**/*.test.svelte.ts"],
  },
  fmt: {
    svelte: true,
  },
});
