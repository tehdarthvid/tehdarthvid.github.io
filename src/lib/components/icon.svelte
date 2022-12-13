<script>
	import { afterUpdate } from 'svelte';

	export let title;
	export let url;
	export let imgURL;

	let isBgImageLoaded = false;
	let img = null;

	/*
	 * Svelte lifecycle handlers
	 */

	afterUpdate(() => {
		if (!isBgImageLoaded && imgURL) {
			img = new Image();
			img.onload = handleImageLoaded;
			img.src = imgURL;
		}
	});

	/*
	 * event handlers
	 */

	// The behaviour changes if this is not an anonymous function.
	const handleImageLoaded = () => {
		isBgImageLoaded = true;
	};
</script>

<div class="icon">
	<a href={url} {title} target="noopener noreferrer">
		{#if isBgImageLoaded}
			<img class="icon" alt={title} src={imgURL} />
		{/if}
	</a>
</div>

<style scoped>
	.icon {
		height: 8vh;
		width: 8vh;
		padding: 1px;
	}
	.icon:hover {
		box-shadow: rgba(255, 255, 255, 0.2) 0 0 40px 5px, rgb(66, 99, 66) 0 0 0 1px;
	}
</style>
