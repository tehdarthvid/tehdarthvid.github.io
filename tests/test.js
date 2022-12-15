import { expect, test } from '@playwright/test';

/*
test('index page has expected h1', async ({ page }) => {
	await page.goto('/');
	expect(await page.textContent('h1')).toBe('darthvid');
});
*/

test('index page has minimum components', async ({ page }) => {
	await page.goto('/');

	// header
	expect(await page.textContent('h1')).toBe('darthvid');

	// Expect a title "to contain" a substring.
	await expect(page).toHaveTitle(/darthvid/);

	// welcome statement
	expect(await page.textContent('p')).toContain('サイトへようこそ!');

	// footer
	await expect(page.locator('text=source')).toContainText('source');
	await expect(page.locator('text=build')).toContainText('build');
});
