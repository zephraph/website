<script lang="ts">
	import figlet from 'figlet';
	import smallMono12 from 'figlet/importable-fonts/Small Mono 12.js';
	import { bannerVisible } from '$lib/stores/banner';
	import type { Action } from 'svelte/action';

	figlet.parseFont('Small Mono 12', smallMono12);

	const primary = 'text-fg-0';
	const secondary = 'text-fg-2';
	const letters = [
		{ char: 'J', color: primary },
		{ char: 'u', color: primary },
		{ char: 's', color: primary },
		{ char: 't', color: primary },
		{ char: 'i', color: secondary },
		{ char: 'n', color: secondary },
		{ char: ' ', color: primary },
		{ char: 'B', color: primary },
		{ char: 'e', color: primary },
		{ char: 'n', color: secondary },
		{ char: 'n', color: secondary },
		{ char: 'e', color: secondary },
		{ char: 't', color: secondary },
		{ char: 't', color: secondary },
	];

	// Generate figlet for each letter
	const letterBanners = letters.map((letter) => {
		const banner = figlet.textSync(letter.char, { font: 'Small Mono 12' });
		return { char: letter.char, color: letter.color, lines: banner.split('\n') };
	});

	// Find the maximum height (number of lines)
	const maxLines = Math.max(...letterBanners.map((lb) => lb.lines.length));

	// Normalize all letters to have the same number of lines (pad with empty lines at the bottom)
	const normalizedBanners = letterBanners.map((lb, idx) => {
		const lines = [...lb.lines];
		// For space characters, create lines with 2 spaces each
		while (lines.length < maxLines) {
			lines.push('');
		}
		return { id: idx, char: lb.char, color: lb.color, lines };
	});

	/**
	 * Svelte action to track when the banner is visible in the viewport
	 */
	const trackVisibility: Action = (node) => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					bannerVisible.set(entry.isIntersecting);
				});
			},
			{
				threshold: 0.1, // Trigger when at least 10% of the banner is visible
			}
		);

		observer.observe(node);

		return {
			destroy() {
				observer.disconnect();
				bannerVisible.set(false);
			},
		};
	};
</script>

<div class="bg-0 w-full mb-[2ch]" use:trackVisibility>
	<div class="flex items-start">
		{#each normalizedBanners as letter (letter.id)}
			<pre class="{letter.color} m-0 p-0 leading-none! font-mono! bg-none">{letter.lines.join(
					'\n'
				)}</pre>
		{/each}
	</div>
</div>
