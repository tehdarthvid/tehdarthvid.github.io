<script>
	import './styles.css';
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';

	import Analytics from '#lib/analytics/Analytics.svelte';

	let { children } = $props();
</script>

<div class="app">
	<Header />

	<Analytics />

	<main>
		{@render children()}
	</main>

	<Footer />
</div>
