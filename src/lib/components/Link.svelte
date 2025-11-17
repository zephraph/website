<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	import type { HTMLProps } from 'svelte/svelte-html';

	let { children, ...props }: HTMLProps<'a', HTMLAttributes<any>> = $props();
</script>

<a {...props} class="text-accent font-bold focus-visible:outline-none">
	{@render children()}
</a>

<style>
	@reference "~/app.css";

	a:hover,
	a:focus {
		@apply px-0.5 -mx-0.5 bg-0 invert;
	}
</style>
