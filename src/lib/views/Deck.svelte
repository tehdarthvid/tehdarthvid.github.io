<script>
	import Card from '../components/Card.svelte';
	import deck from '#lib/data/cache.json';
	import { clipName } from '#lib/clip-name.js';

	// video loops made by scripts/clips.js (gitignored, so absent in a fresh checkout)
	const loops = /** @type {Record<string, string>} */ (
		import.meta.glob('../clips/*.{mp4,webp}', { eager: true, query: '?url', import: 'default' })
	);

	/**
	 * A card with a loop plays it instead of its YouTube video, with the loop's poster as the
	 * still frame. Without the loop it stays as it is.
	 * @param {(typeof deck)[number]} card
	 */
	function withLoop(card) {
		const name = clipName(card);
		const vidURL = loops[`../clips/${name}.mp4`];
		if (!('clip' in card) || !vidURL) return card;
		return { ...card, ytVideoID: undefined, vidURL, imgURL: loops[`../clips/${name}.webp`] };
	}
</script>

<div id="ran-into">
	<h2>currently into</h2>
	<div class="container">
		{#each deck as card (card.title)}
			<Card
				params={withLoop(card)}
				onopen={() => window.open(card.url, '_blank', 'noopener,noreferrer')}
			/>
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
