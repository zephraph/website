<script>
	import Tag from '$lib/components/Tag.svelte';
	import Button from '$lib/components/Button.svelte';
	import { goto } from '$app/navigation';

	let { data } = $props();

	function clearFilter() {
		goto('/blog');
	}
</script>

<div class="px-4 py-12 font-mono">
	<div class="mb-8">
		<h1 class="font-bold mb-2">~/blog</h1>

		{#if data.tagCounts.length > 0}
			<div class="mt-4 flex flex-wrap gap-2 items-center">
				{#if data.selectedTag}
					<Tag
						tag={data.selectedTag}
						count={data.tagCounts.find((t) => t.tag === data.selectedTag)?.count}
						url="/blog"
						aria-label="Clear tag filter"
					/>
					<Button onclick={clearFilter} aria-label="Clear tag filter" shortcut="c" label="clear" />
				{:else}
					{#each data.tagCounts as { tag, count }}
						<Tag {tag} {count} url="/blog" />
					{/each}
				{/if}
			</div>
		{/if}
	</div>

	{#if data.posts.length > 0}
		<ul class="space-y-1">
			{#each data.posts as post}
				<li>
					<a
						href="/blog/{post.slug}"
						class="flex gap-4 bg-0 hocus:invert -mx-[1ch] px-[1ch] outline-none group"
					>
						<span class="text-fg-2 shrink-0 group-hocus:text-accent">
							{#if post.metadata.date}
								{new Date(post.metadata.date).toLocaleDateString('en-US', {
									year: 'numeric',
									month: 'short',
									day: '2-digit',
								})}
							{:else}
								---
							{/if}
						</span>
						<h2 class="whitespace-nowrap">{post.metadata.title || post.slug}</h2>
						{#if post.metadata.description}
							<span class="truncate min-w-0">{post.metadata.description}</span>
						{/if}
					</a>
				</li>
			{/each}
		</ul>
	{:else}
		<p class="text-gray-500">
			{#if data.selectedTag}
				no posts with tag "{data.selectedTag}"
			{:else}
				total 0
			{/if}
		</p>
	{/if}
</div>
