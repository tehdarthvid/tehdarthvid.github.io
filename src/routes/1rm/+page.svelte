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
	let weight = 85.5;
	let reps = 5;

	$: Brzycki_result = (weight / (1.0278 - 0.0278 * reps)).toFixed(2);
	$: Epley_result = (weight * (1 + 0.0333 * reps)).toFixed(2);
	$: Lander_result = ((100 * weight) / (101.3 - 2.67123 * reps)).toFixed(2);
	$: Mayhew_result = ((100 * weight) / (52.2 + 41.9 * Math.exp(-0.055 * reps))).toFixed(2);
	$: OConner_result = (weight * (1 + 0.025 * reps)).toFixed(2);
	$: Wathan_result = ((100 * weight) / (48.8 + 53.8 * Math.exp(-0.075 * reps))).toFixed(2);
</script>

<svelte:head>
	<title>1rm calculator</title>
	<meta name="description" content="1rm computer by darthvid" />
	<link
		href="https://fonts.googleapis.com/css?family=Source+Code+Pro|Noto+Sans+JP&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<!--

-->
<header>
	<h1>1rm calculator</h1>
	<p>by <a href="/">darthvid</a></p>
</header>

<section>
	<p>enter your numbers:</p>
	<div class="input">
		<input
			name="weight"
			placeholder="weight"
			type="number"
			step="0.5"
			value={weight}
			on:input={(value) => {
				weight = value.target.value;
			}}
		/>
		<span>×</span>
		<input
			name="reps"
			placeholder="reps"
			type="number"
			value={reps}
			on:input={(value) => {
				reps = value.target.value;
			}}
		/>
	</div>
	<div class="result">
		<div class="grid-container">
			<div class="formula">Wathan</div>
			<div class="formula-result">{Wathan_result}</div>
			<div class="formula">Brzycki</div>
			<div class="formula-result">{Brzycki_result}</div>
			<div class="formula">Elpey</div>
			<div class="formula-result">{Epley_result}</div>
			<div class="formula">Lander</div>
			<div class="formula-result">{Lander_result}</div>
			<div class="formula">Mayhew et al.</div>
			<div class="formula-result">{Mayhew_result}</div>
			<div class="formula">O'Conner et al.</div>
			<div class="formula-result">{OConner_result}</div>
		</div>
	</div>
</section>

<style>
	.wrapus {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}
	.input {
		/*
		height: 3em;
		*/
	}
	.grid-container {
		display: grid;
		grid-template-columns: auto 1em auto;
	}
	.formula {
		grid-column: 1;
		text-align: right;
	}
	.formula-result {
		grid-column: 3;
		text-align: left;
	}
</style>
