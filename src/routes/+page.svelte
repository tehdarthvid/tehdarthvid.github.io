<script>
	//import cache_data from '$lib/data/cache.json';
	//export let gaID;
	//export let git_hash;

	import * as json_data from '$lib/data/content.json';
	var site_data;
	try {
		site_data = json_data;
		if (null == site_data) {
			site_data = {};
		}
	} catch {
		site_data = {};
	}

	import Icon from '$lib/components/icon.svelte';
	import LinkTo from '$lib/components/linkto.svelte';

	import Deck from '$lib/views/Deck.svelte';

	/*
	//TODO
	//this seems to need to be loaded on client side, but we're setup for SSR/prerender
	//https://www.reddit.com/r/sveltejs/comments/mhcmv0/sveltekit_window_is_not_defined/
	let gaID = '0123456789';
	import { googleAnalytics } from '$lib/analytics/google-analytics.js';
	if (gaID) googleAnalytics(gaID);
	*/
</script>

<svelte:head>
	<title>darthvid</title>
	<meta name="description" content="a personal homepage" />
	<link
		href="https://fonts.googleapis.com/css?family=Source+Code+Pro|Noto+Sans+JP&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<!--

-->
<header>
	{#if null != site_data.name}
		<h1>
			<a href="/">{site_data.name}</a>
		</h1>
	{/if}
</header>

<section>
	{#if null != site_data.links}
		<div id="is-at">
			<h2>is at</h2>
			<div class="wrapus">
				{#each site_data.links as linkData}
					<LinkTo {...linkData} />
				{/each}
			</div>
		</div>
	{/if}

	<Deck />

	{#if null != site_data.projects}
		<div id="dabbles-in">
			<h2>dabbles in</h2>
			<div class="wrapus">
				{#each site_data.projects as linkData}
					<LinkTo {...linkData} />
				{/each}
			</div>
		</div>
	{/if}

	{#if null != site_data.toybox}
		<div id="plays-with">
			<h2>plays with</h2>
			<div class="wrapus">
				{#each site_data.toybox as linkData}
					<Icon {...linkData} />
				{/each}
			</div>
		</div>
	{/if}

	{#if null != site_data.shelf}
		<div id="wants-to-play">
			<h2>wants to play</h2>
			<div class="wrapus">
				{#each site_data.shelf as linkData}
					<Icon {...linkData} />
				{/each}
			</div>
		</div>
	{/if}
</section>

<style>
	.wrapus {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}
</style>
