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
    include: ["src/**/*.test.svelte.ts"],
  },
});
