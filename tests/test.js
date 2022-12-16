import { expect, test } from '@playwright/test';

/*
test('index page has expected h1', async ({ page }) => {
	await page.goto('/');
	expect(await page.textContent('h1')).toBe('darthvid');
});
*/

/* 
	Parallel tests on this file.
	By default, test in a file are run serial, but are parallel between files.
*/
test.describe.configure({ mode: 'parallel' });

test('has title and header', async ({ page }) => {
	await page.goto('/');

	// Expect a title "to contain" a substring.
	await expect(page).toHaveTitle(/darthvid/);

	// header
	expect(await page.textContent('h1')).toBe('darthvid');

	// welcome statement
	expect(await page.textContent('p')).toContain('サイトへようこそ!');
});

test('has has footer', async ({ page }) => {
	await page.goto('/');

	// footer
	await expect(page.locator('text=source')).toContainText('source');
	await expect(page.locator('text=build')).toContainText('build');
});

test('has has all content', async ({ page }) => {
	await page.goto('/');

	await expect(page.locator('text=LinkedIn')).toContainText('LinkedIn');
	await expect(page.locator('text=this site')).toContainText('this site');
});
