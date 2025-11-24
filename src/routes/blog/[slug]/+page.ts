import { error } from '@sveltejs/kit';
import type { MarkdownModule } from '$lib/../mdsvex';

export async function load({ params }) {
	try {
		// Get all blog posts and find the one matching the slug
		const posts = import.meta.glob<MarkdownModule>('/src/content/blog/*.md', { eager: true });

		const matchingPost = Object.entries(posts).find(([path]) => {
			const filename = path.split('/').pop()?.replace('.md', '') || '';
			const slug = filename.replace(/^\d{4}_/, '');
			return slug === params.slug;
		});

		if (!matchingPost) {
			throw error(404, `Blog post not found: ${params.slug}`);
		}

		const post = matchingPost[1];

		return {
			content: post.default,
			metadata: post.metadata,
		};
	} catch (e) {
		if (e && typeof e === 'object' && 'status' in e && e.status === 404) throw e;
		throw error(404, `Blog post not found: ${params.slug}`);
	}
}
