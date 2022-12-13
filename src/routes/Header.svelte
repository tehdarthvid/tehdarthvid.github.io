<script>
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
</script>

<header>
	{#if null != site_data.welcome_msg}
		<p>{site_data.welcome_msg}</p>
	{/if}
	{#if null != site_data.name}
		<h1>
			<a href="/">{site_data.name}</a>
		</h1>
	{/if}
</header>
