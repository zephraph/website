<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/state';

	function handleKeyPress(event: KeyboardEvent) {
		// Don't trigger if user is typing in an input/textarea
		if (event.target?.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA') {
			return;
		}

		// Don't trigger if any modifier keys are pressed
		if (event.metaKey || event.ctrlKey || event.altKey || event.shiftKey) {
			return;
		}

		switch (event.key.toLowerCase()) {
			case 'h':
				goto('/');
				break;
			case 'b':
				goto('/blog');
				break;
			case 'p':
				goto('/projects');
				break;
			case 'r':
				goto('/research');
				break;
		}
	}

	function isActive(path: string) {
		if (path === '/') {
			return page.url.pathname === '/';
		}
		return page.url.pathname.startsWith(path);
	}
</script>

<svelte:window on:keydown={handleKeyPress} />

<nav class="fixed top-0 left-0 right-0 flex items-center bg-1 z-10" style="height: 1lh;">
	<a href="/" class="nav-link" class:active={isActive('/')}
		><span class="font-bold underline">h</span>ome</a
	>
	<a href="/blog" class="nav-link" class:active={isActive('/blog')}
		><span class="font-bold underline">b</span>log</a
	>
	<a href="/projects" class="nav-link" class:active={isActive('/projects')}
		><span class="font-bold underline">p</span>rojects</a
	>
	<a href="/research" class="nav-link" class:active={isActive('/research')}
		><span class="font-bold underline">r</span>esearch</a
	>

	<div class="ml-auto flex">
		<a
			href="mailto:contact@just-be.dev"
			class="icon-link"
			style="height: 1lh;"
			title="Email"
			aria-label="Email"
		>
			<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
				<path
					d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"
				/>
			</svg>
		</a>
		<a
			href="https://github.com/just-be"
			target="_blank"
			rel="noopener noreferrer"
			class="icon-link"
			style="height: 1lh;"
			title="GitHub"
			aria-label="GitHub"
		>
			<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
				<path
					d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
				/>
			</svg>
		</a>
		<a
			href="https://bsky.app/profile/just-be.dev"
			target="_blank"
			rel="noopener noreferrer"
			class="icon-link"
			style="height: 1lh;"
			title="Bluesky"
			aria-label="Bluesky"
		>
			<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
				<path
					d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.815 2.736 3.713 3.66 6.383 3.364.136-.02.275-.039.415-.056-.138.022-.276.04-.415.056-3.912.58-7.387 2.005-2.83 7.078 5.013 5.19 6.87-1.113 7.823-4.308.953 3.195 2.05 9.271 7.733 4.308 4.267-4.308 1.172-6.498-2.74-7.078a8.741 8.741 0 0 1-.415-.056c.14.017.279.036.415.056 2.67.297 5.568-.628 6.383-3.364.246-.828.624-5.79.624-6.478 0-.69-.139-1.861-.902-2.206-.659-.298-1.664-.62-4.3 1.24C16.046 4.748 13.087 8.687 12 10.8Z"
				/>
			</svg>
		</a>
		<a
			href="https://twitter.com/justbe_dev"
			target="_blank"
			rel="noopener noreferrer"
			class="icon-link"
			style="height: 1lh;"
			title="Twitter"
			aria-label="Twitter"
		>
			<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
				<path
					d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
				/>
			</svg>
		</a>
		<a
			href="https://linkedin.com/in/justinbennett"
			target="_blank"
			rel="noopener noreferrer"
			class="icon-link"
			style="height: 1lh;"
			title="LinkedIn"
			aria-label="LinkedIn"
		>
			<svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
				<path
					d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
				/>
			</svg>
		</a>
	</div>
</nav>

<style>
	@reference "~/app.css";
	.nav-link {
		@apply px-3 text-fg-0 bg-1;
		display: flex;
		align-items: center;
		transition: colors;
	}

	.nav-link:hover {
		filter: invert(1);
		/*color: invert(1);
		background-color: invert(1);*/
	}

	.nav-link.active,
	.nav-link.active:hover {
		@apply bg-0 text-fg-0;
		filter: invert(0);
	}

	.icon-link {
		@apply px-2 flex items-center bg-1;
		transition: filter 0.2s;
	}

	.icon-link:hover {
		filter: invert(1);
	}
</style>
