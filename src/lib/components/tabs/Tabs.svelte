<script lang="ts">
	import { setContext } from 'svelte';
	import { goto } from '$app/navigation';
	import { SvelteMap } from 'svelte/reactivity';

	interface Props {
		activeHref: string;
		children?: import('svelte').Snippet;
	}

	let { activeHref, children }: Props = $props();

	// Store registered tabs (key -> href)
	const tabs = new SvelteMap<string, string>();

	// Provide context for Tab children
	setContext('tabs-active', {
		get current() {
			return activeHref;
		},
	});

	setContext('tabs-register', (key: string, href: string) => {
		tabs.set(key.toLowerCase(), href);
	});

	function handleKeyPress(event: KeyboardEvent) {
		// Don't trigger if user is typing in an input/textarea
		if (
			event.target instanceof HTMLElement &&
			(event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA')
		) {
			return;
		}

		// Don't trigger if any modifier keys are pressed
		if (event.metaKey || event.ctrlKey || event.altKey || event.shiftKey) {
			return;
		}

		const key = event.key.toLowerCase();
		const href = tabs.get(key);

		if (href) {
			goto(href);
		}
	}
</script>

<svelte:window onkeydown={handleKeyPress} />

<div class="flex">
	{@render children?.()}
</div>
