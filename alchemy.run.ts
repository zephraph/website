import alchemy, { Website } from "alchemy";

// Initialize the Alchemy app for Cloudflare SvelteKit deployment
const app = await alchemy("cloudflare-sveltekit");

// Deploy the SvelteKit website to Cloudflare Pages
export const website = await Website("website", {
	// The name of your Cloudflare Pages project
	name: `${app.name}-${app.stage}`,

	// Build configuration
	build: {
		// SvelteKit builds to the .svelte-kit/cloudflare directory
		directory: ".svelte-kit/cloudflare",
	},

	// Cloudflare bindings for environment variables and resources
	// Add any KV namespaces, R2 buckets, D1 databases, etc. here
	bindings: {
		// Example: Add environment-specific secrets
		// MY_SECRET: alchemy.secret("MY_SECRET"),

		// Example: Add KV namespace (uncomment to use)
		// KV_STORE: await KVNamespace("kv", {
		//   name: `${app.name}-${app.stage}-kv`,
		// }),

		// Example: Add R2 bucket (uncomment to use)
		// STORAGE: await R2Bucket("storage", {
		//   name: `${app.name}-${app.stage}-storage`,
		// }),
	},
});

// Finalize the deployment
await app.finalize();
