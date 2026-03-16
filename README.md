# VitePlus + SvelteKit Starter Template

Modern, fast and optimized development environment with VitePlus and SvelteKit. Includes oxfmt, oxlint, vitest, and vite—an all-in-one template you'll probably need for every project.

[pnpm](https://pnpm.io/) is recommended as package manager.
Install Vite+ CLI first. See https://viteplus.dev/guide/#install-vp for more information.

## Using the template

```sh
# create a new project
vp create https://github.com/ErenayDev/viteplus-svelte
```

## Developing

Once you've created a project and installed dependencies with `pnpm install`, start a development server:

```sh
pnpm run dev

# or start the server and open the app in a new browser tab
pnpm run dev -- --open
```

## Building

To create a production version of your app:

```sh
pnpm run build
```

You can preview the production build with `pnpm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.
