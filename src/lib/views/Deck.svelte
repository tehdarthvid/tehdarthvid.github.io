<script>
	import Card from '../components/Card.svelte';
	import deck from '#lib/data/cache.json';
</script>

<div id="ran-into">
	<h2>currently into</h2>
	<div class="container">
		{#each deck as card (card.title)}
			<Card params={{ ...card }} />
		{/each}
	</div>
</div>

<style>
	.container {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
	}
</style>
