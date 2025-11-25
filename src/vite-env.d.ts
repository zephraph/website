/// <reference types="svelte" />
/// <reference types="vite/client" />

// Declare .md files as modules
declare module '~/content/home.md' {
	import type { SvelteComponent } from 'svelte';
	const component: typeof SvelteComponent;
	export default component;
}

declare module '~/content/work.md' {
	import type { SvelteComponent } from 'svelte';
	const component: typeof SvelteComponent;
	export default component;
}
