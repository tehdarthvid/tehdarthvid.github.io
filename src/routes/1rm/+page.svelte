<script>
	//import cache_data from '$lib/data/cache.json';

	let weight = 85.5;
	let reps = 5;

	//$: Brzycki_result = weight;
	$: Brzycki_result = (weight / (1.0278 - 0.0278 * reps)).toFixed(2);
	$: Epley_result = (weight * (1 + 0.0333 * reps)).toFixed(2);
	$: Lander_result = ((100 * weight) / (101.3 - 2.67123 * reps)).toFixed(2);
	$: Mayhew_result = ((100 * weight) / (52.2 + 41.9 * Math.exp(-0.055 * reps))).toFixed(2);
	$: OConner_result = (weight * (1 + 0.025 * reps)).toFixed(2);
	$: Wathan_result = ((100 * weight) / (48.8 + 53.8 * Math.exp(-0.075 * reps))).toFixed(2);
	//$: Wendler_result = (weight * (reps * 0.0333) + weight).toFixed(2);
	$: Wendler_result = Epley_result;
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
</header>

<section>
	<div class="input-grid">
		<div class="weight-text">weight</div>
		<div class="reps-text">reps</div>
		<div class="weight-input">
			<div class="input">
				<input
					name="weight"
					placeholder="weight"
					type="number"
					step="0.5"
					size="6"
					value={weight}
					on:input={(value) => {
						//console.log(typeof (weight * (reps * 0.0333) + weight));
						weight = value.target.value;
					}}
				/>
			</div>
		</div>
		<div class="reps-input">
			<div class="input">
				<input
					name="reps"
					placeholder="reps"
					type="number"
					size="3"
					value={reps}
					on:input={(value) => {
						reps = value.target.value;
					}}
				/>
			</div>
		</div>
	</div>
	<div class="result">
		<div class="grid-container">
			<div class="formula">Wendler</div>
			<div class="formula-result">{Wendler_result}</div>
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
			<div class="formula">Wathan</div>
			<div class="formula-result">{Wathan_result}</div>
		</div>
	</div>

	<p class="madeby">by <a href="/">darthvid</a></p>
</section>

<style>
	input {
		height: 1.23em;
		font-size: 1.23em;
	}
	.input-grid {
		display: grid;
		grid-template-columns: auto auto;
	}
	.weight-text {
		grid-row: 1;
		grid-column: 1;
	}
	.weight-input {
		grid-row: 2;
		grid-column: 1;
	}
	.reps-text {
		grid-row: 1;
		grid-column: 2;
	}
	.reps-input {
		grid-row: 2;
		grid-column: 2;
	}
	.input {
		font-size: 2em;
	}
	.grid-container {
		display: grid;
		grid-template-columns: auto 1em auto;
		font-size: 2em;
	}
	.formula {
		grid-column: 1;
		text-align: right;
	}
	.formula-result {
		grid-column: 3;
		text-align: left;
	}
	.madeby {
		font-size: 1em;
	}
</style>
