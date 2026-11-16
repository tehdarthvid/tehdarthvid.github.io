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
			adapter: adapter(),
			// The CSP. Pages are prerendered, so SvelteKit writes it as a <meta http-equiv> tag (GitHub
			// Pages can't set headers; frame-ancestors, report-uri and sandbox don't work in a meta tag).
			// 'hash' mode adds the SHA-256 of SvelteKit's inline startup script to script-src, so no
			// 'unsafe-inline' is needed for scripts (an injected inline script is blocked). style-src
			// keeps 'unsafe-inline' for the style="" attributes Svelte renders (card parallax, dice).
			// Keep dev-only hosts out: 'self' covers Vite's dev server and HMR socket.
			csp: {
				mode: 'hash',
				directives: {
					'default-src': ['self', 'www.youtube-nocookie.com'],
					'script-src': [
						'self',
						'www.googletagmanager.com',
						'www.google-analytics.com',
						// Svelte's server render adds onload="this.__e=event" to <img>/<video> with an
						// onload handler, so a load that fires before hydration is replayed. 'unsafe-hashes'
						// allows only inline handlers with exactly that text (no other inline handler runs).
						'unsafe-hashes',
						'sha256-7dQwUgLau1NFCCGjfn9FsYptB6ZtWxJin6VohGIu20I='
					],
					'style-src': ['self', 'unsafe-inline'],
					// card images come from anywhere ('*' isn't in SvelteKit's types; on an https page
					// 'https:' allows the same, since http images would be mixed content anyway)
					'img-src': ['self', 'https:'],
					'connect-src': [
						'self',
						'https://*.google-analytics.com',
						'https://*.analytics.google.com',
						'https://*.googletagmanager.com'
					],
					'media-src': ['self'],
					'object-src': ['none'],
					'base-uri': ['self'],
					'form-action': ['self']
				}
			}
		})
	]
};

export default config;
