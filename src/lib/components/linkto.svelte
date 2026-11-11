<script>
	let { title, url } = $props();
</script>

<div class="linkto">
	【
	<!-- eslint-disable-next-line svelte/no-navigation-without-resolve -- external URL from content.json -->
	<a href={url}>{title}</a>
	】
</div>

<style>
</style>
