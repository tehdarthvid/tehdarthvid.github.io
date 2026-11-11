<script>
	import { PUBLIC_GA_TRACKING_ID } from '$app/env/public';

	const googleAnalyticsId = PUBLIC_GA_TRACKING_ID;

	try {
		if (googleAnalyticsId && typeof window !== 'undefined') {
			window.dataLayer = window.dataLayer || [];
			function gtag() {
				window.dataLayer.push(arguments);
			}
			gtag('js', new Date());
			gtag('config', googleAnalyticsId);
		}
	} catch {
		console.error('Failed to initialize Analytics');
	}
</script>

<svelte:head>
	{#if googleAnalyticsId}
		<script
			async
			src="https://www.googletagmanager.com/gtag/js?id={encodeURIComponent(googleAnalyticsId)}"
		></script>
	{/if}
</svelte:head>
