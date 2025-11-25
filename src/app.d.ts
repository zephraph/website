// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

// Declare .md files as Svelte components (processed by mdsvex)
declare module '*.md' {
	import type { SvelteComponent } from 'svelte';
	const component: typeof SvelteComponent;
	export default component;
}

// Support path alias for .md files
declare module '~/content/*.md' {
	import type { SvelteComponent } from 'svelte';
	const component: typeof SvelteComponent;
	export default component;
}

// Extend Svelte elements to support custom attributes
declare module 'svelte/elements' {
	export interface HTMLAttributes<T> {
		'variant-'?: string;
		'box-'?: string;
		'shear-'?: string;
	}
}

export {};
