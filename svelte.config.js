// After you've configuraed your adapter correctly,
// please delete other adapter package from package.json

import adapter from "@sveltejs/adapter-static"; // @sveltejs/adapter-auto
import pkg from "./package.json" with { type: "json" };

const dev = process.env.NODE_ENV === "development";
/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    // If your environment is not supported, or you settled on a specific environment, switch out the adapter.
    // See https://svelte.dev/docs/kit/adapters for more information about adapters.
    adapter: adapter({
      pages: "build",
      assets: "build",
      fallback: null,
      precompress: false,
      strict: false,
    }),
    // required for hosting on Github Pages. If this is not in your case, just delete below 3 lines.
    paths: {
      base: dev ? "" : `/${pkg.name}`,
    },
  },
  vitePlugin: {
    dynamicCompileOptions: ({ filename }) =>
      filename.includes("node_modules") ? undefined : { runes: true },
  },
};

export default config;
