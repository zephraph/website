<script lang="ts">
	import { getContext } from 'svelte';
	import { goto } from '$app/navigation';

	interface Props {
		href: string;
		key: string;
		label: string;
	}

	let { href, key, label }: Props = $props();

	const activeHref = getContext<{ current: string }>('tabs-active');
	const registerTab = getContext<(key: string, href: string) => void>('tabs-register');

	// Register this tab with the parent
	registerTab(key, href);

	const isActive = $derived(
		href === '/' ? activeHref.current === '/' : activeHref.current.startsWith(href)
	);

	// Split the label to highlight the key character
	const highlightedLabel = $derived.by(() => {
		const lowerLabel = label.toLowerCase();
		const lowerKey = key.toLowerCase();
		const index = lowerLabel.indexOf(lowerKey);

		if (index === -1) {
			return { before: label, key: '', after: '' };
		}

		return {
			before: label.slice(0, index),
			key: label.slice(index, index + 1),
			after: label.slice(index + 1)
		};
	});
</script>

{#if isActive}
	<span class="nav-link active"
		>{highlightedLabel.before}<span class="font-bold underline"
			>{highlightedLabel.key}</span
		>{highlightedLabel.after}</span
	>
{:else}
	<a {href} class="nav-link"
		>{highlightedLabel.before}<span class="font-bold underline"
			>{highlightedLabel.key}</span
		>{highlightedLabel.after}</a
	>
{/if}

<style>
	@reference "~/app.css";

	.nav-link {
		@apply px-3 text-fg-0 bg-1;
		display: flex;
		align-items: center;
		transition: colors;
	}

	.nav-link:hover,
	.nav-link:focus-visible {
		filter: invert(1);
		outline: none;
	}

	.nav-link.active,
	.nav-link.active:hover,
	.nav-link.active:focus-visible {
		@apply bg-0 text-fg-0;
		filter: invert(0);
		outline: none;
	}
</style>
