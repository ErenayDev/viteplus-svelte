import adapter from "@sveltejs/adapter-static"; // @sveltejs/adapter-auto
import pkg from "./package.json" with { type: "json" };

const dev = process.env.NODE_ENV === "development";
/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    // adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
    // If your environment is not supported, or you settled on a specific environment, switch out the adapter.
    // See https://svelte.dev/docs/kit/adapters for more information about adapters.
    adapter: adapter({
      pages: "build",
      assets: "build",
      fallback: null,
      precompress: false,
      strict: false,
    }),
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
