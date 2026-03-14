# VitePlus + SvelteKit Starter Template

Modern, fast and optimized development environment with VitePlus and SvelteKit.

[pnpm](https://pnpm.io/) is recommended.

## Using the template

```sh
# create a new project
pnpx vp create https://github.com/ErenayDev/viteplus-svelte
```

## Developing

Once you've created a project and installed dependencies with `bun install`, start a development server:

```sh
pnpx run dev

# or start the server and open the app in a new browser tab
pnpx run dev -- --open
```

## Building

To create a production version of your app:

```sh
bun --bun run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.
