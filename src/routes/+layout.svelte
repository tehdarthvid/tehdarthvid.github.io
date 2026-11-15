<script>
	// Self-hosted fonts (Fontsource, OFL). The Latin face is preloaded; Noto Sans JP's
	// ~120 unicode-range subsets (31 KiB of CSS) load after hydration so they don't block render.
	import '@fontsource/source-code-pro/400.css';
	import sourceCodeProLatin from '@fontsource/source-code-pro/files/source-code-pro-latin-400-normal.woff2?url';
	import './styles.css';
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';

	import Analytics from '#lib/analytics/Analytics.svelte';

	let { children } = $props();

	$effect(() => {
		import('@fontsource/noto-sans-jp/400.css');
	});
</script>

<svelte:head>
	<link
		rel="preload"
		as="font"
		type="font/woff2"
		href={sourceCodeProLatin}
		crossorigin="anonymous"
	/>
</svelte:head>

<div class="app">
	<Header />

	<Analytics />

	<main>
		{@render children()}
	</main>

	<Footer />
</div>
