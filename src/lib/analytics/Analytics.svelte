<script>
	import { PUBLIC_GA_TRACKING_ID } from '$env/static/public';

	try {
		if (typeof window !== 'undefined' && window) {
			const googleAnalyticsId = PUBLIC_GA_TRACKING_ID;
			window.dataLayer = window.dataLayer || [];
			function gtag() {
				window.dataLayer.push(arguments);
			}
			gtag('js', new Date());
			gtag('config', googleAnalyticsId);
		}
	} catch (error) {
		console.error('Failed to initialize Analytics');
	}
</script>

<svelte:head>
	<script async src="https://www.googletagmanager.com/gtag/js"></script>
</svelte:head>
