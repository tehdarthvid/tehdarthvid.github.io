import { sveltekit } from '@sveltejs/kit/vite';
import adapter from '@sveltejs/adapter-static';

const config = {
	build: {
		// keep fonts and the video loops (and posters) as files: the CSP allows no data: fonts,
		// images or media, so inlined ones would be blocked
		assetsInlineLimit: (/** @type {string} */ file) =>
			/\.woff2?$|\/clips\//.test(file) ? false : undefined
	},
	plugins: [
		sveltekit({
			adapter: adapter()
		})
	]
};

export default config;
