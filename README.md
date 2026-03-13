# VitePlus + SvelteKit Starter Template

Modern, fast and optimized development environment with VitePlus and SvelteKit.

## Install Bun

Install Bun runtime first if it is not installed

```sh
curl -fsSL https://bun.sh/install | bash
```

## Using the template

```sh
# create a new project
bunx vp create https://github.com/ErenayDev/viteplus-svelte
```

## Developing

Once you've created a project and installed dependencies with `bun install`, start a development server:

```sh
bun --bun run dev

# or start the server and open the app in a new browser tab
bun --bun run dev -- --open
```

## Building

To create a production version of your app:

```sh
bun --bun run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.
