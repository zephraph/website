<script lang="ts">
	import type { HTMLAnchorAttributes } from 'svelte/elements';
	import { page } from '$app/state';

	type Props = Omit<HTMLAnchorAttributes, 'href'> & {
		tag: string;
		count?: number;
		url?: string;
	};

	let { tag, count, url, ...props }: Props = $props();

	const href = $derived(`${url ?? page.url.pathname}?tag=${encodeURIComponent(tag)}`);
</script>

<a
	{href}
	class="bg-2 text-accent hocus:bg-0 hocus:invert outline-none flex items-center group"
	{...props}
>
	<span class="px-[1ch]">{tag}</span>
	{#if count !== undefined}
		<span class="text-fg-2 bg-1 px-[1ch] group-hocus:bg-2 group-hocus:text-accent">{count}</span>
	{/if}
</a>
