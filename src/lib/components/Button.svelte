<script lang="ts">
	import type { HTMLButtonAttributes } from 'svelte/elements';
	import type { Snippet } from 'svelte';

	type Props = HTMLButtonAttributes & {
		shortcut?: string;
		label?: string;
		children?: Snippet;
	};

	let { shortcut, label, children, ...props }: Props = $props();

	let buttonRef: HTMLButtonElement | null = $state(null);

	function handleKeydown(event: KeyboardEvent) {
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

		if (shortcut && event.key.toLowerCase() === shortcut.toLowerCase()) {
			event.preventDefault();
			buttonRef?.click();
		}
	}

	// Split the label text to highlight the shortcut character
	const highlightedContent = $derived.by(() => {
		if (!shortcut || !label) {
			return null;
		}

		const lowerContent = label.toLowerCase();
		const lowerKey = shortcut.toLowerCase();
		const index = lowerContent.indexOf(lowerKey);

		if (index === -1) {
			return null;
		}

		return {
			before: label.slice(0, index),
			key: label.slice(index, index + 1),
			after: label.slice(index + 1)
		};
	});
</script>

<svelte:window onkeydown={handleKeydown} />

<button
	bind:this={buttonRef}
	class="bg-2 text-accent hocus:bg-0 hocus:invert outline-none flex items-center px-[1ch] cursor-pointer"
	{...props}
>
	{#if highlightedContent}
		{highlightedContent.before}<span class="font-bold underline"
			>{highlightedContent.key}</span
		>{highlightedContent.after}
	{:else if label}
		{label}
	{:else if children}
		{@render children()}
	{/if}
</button>
