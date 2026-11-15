/**
 * File name (without extension) of a card's video loop in `src/lib/clips/`.
 * Shared by `scripts/clips.js`, which makes the loops, and `Deck.svelte`, which shows them.
 * @param {{ title: string }} card
 */
export function clipName(card) {
	return card.title
		.normalize('NFKD')
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-|-$/g, '');
}
