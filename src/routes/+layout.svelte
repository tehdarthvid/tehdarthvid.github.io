<script>
	import './styles.css';
	import Header from './Header.svelte';
	import Footer from './Footer.svelte';

	//export let gaID;
	//import { PUBLIC_GA_TRACKING_ID } from '$env/static/public';
	//let gaID = PUBLIC_GA_TRACKING_ID;
	//import { googleAnalytics } from '$lib/analytics/google-analytics.js';
	//if (gaID) googleAnalytics(gaID);
	import Analytics from '$lib/analytics/Analytics.svelte';
</script>

<div class="app">
	<Header />

	<Analytics/>

	<main>
		<slot />
	</main>

	<Footer />
	
	<!--
		Firefox woraround for FocusEvent, supposedly during inspector only.
	-->
	<script>0</script>
</div>
