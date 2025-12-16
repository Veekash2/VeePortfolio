import adapter from '@sveltejs/adapter-static'; // Change this import
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		// This tells SvelteKit to build to the 'build' folder for Azure
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: 'index.html', // Important for Single Page Apps (SPA)
			precompress: false,
			strict: true
		})
	}
};

export default config;