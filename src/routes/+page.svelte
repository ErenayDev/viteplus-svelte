<script lang="ts" module>
    export function sum(getCount: () => number, initial: number = 0) {
        return {
            get value() {
                return getCount() + initial;
            },
        };
    }
</script>

<script lang="ts">
    let count = $state(0);
    let summed = sum(() => count, 1);
    import svelte from "$lib/assets/svelte.svg";
    import viteplus from "$lib/assets/viteplus.svg";
</script>

<div class="container">
    <div class="logos">
        <img src={viteplus} alt="VitePlus" class="logo" />
        <span class="plus">+</span>
        <img src={svelte} alt="Svelte" class="logo" />
    </div>
    <h1>VitePlus + SvelteKit</h1>
    <p class="description">
        Modern, fast and optimized development environment
    </p>
    <div class="links">
        <a
            href="https://viteplus.dev"
            target="_blank"
            rel="noopener noreferrer"
        >
            VitePlus Documentation
        </a>
        <a
            href="https://svelte.dev/docs/kit"
            target="_blank"
            rel="noopener noreferrer"
        >
            SvelteKit Documentation
        </a>
    </div>
    <button onclick={() => count++} class="counter">
        Clicks: {summed.value}
    </button>
</div>
