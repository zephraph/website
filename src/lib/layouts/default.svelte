<script module lang="ts">
	export { default as a } from '~/lib/components/Link.svelte';
</script>

<script lang="ts">
	let { title, children } = $props();
</script>

<article class="my-[1lh]">
	<div class="flex flex-col max-w-none">
		{@render children?.()}
	</div>
</article>
