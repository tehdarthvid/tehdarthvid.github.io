import { sveltekit } from '@sveltejs/kit/vite';
import adapter from '@sveltejs/adapter-static';

const config = {
	build: {
		// keep font files as files: the CSP has no font-src data:, so inlined subsets would be blocked
		assetsInlineLimit: (/** @type {string} */ file) => (/\.woff2?$/.test(file) ? false : undefined)
	},
	plugins: [
		sveltekit({
			adapter: adapter()
		})
	]
};

export default config;
