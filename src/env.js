import { defineEnvVars } from '@sveltejs/kit/env';

export const variables = defineEnvVars({
	PUBLIC_GITHUB_SHA: { public: true, static: true },
	PUBLIC_GA_TRACKING_ID: { public: true, static: true }
});
