<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		href,
		target,
		rel,
		children,
	}: {
		href: string;
		target?: string;
		rel?: string;
		children: Snippet;
	} = $props();
</script>

<a
	{href}
	{target}
	{rel}
	class="transition-colors text-blue-0 hover:px-0.5 hover:-ml-0.5 hover:-mr-0.5 font-bold hover:invert hover:bg-0 focus:invert focus-visible:outline-none"
>
	{@render children()}
</a>
