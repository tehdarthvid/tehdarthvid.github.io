import { expect, test } from '@playwright/test';
import { readFileSync } from 'node:fs';
//import { select_multiple_value } from 'svelte/internal';

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
	await expect(page.locator('text=source')).toBeVisible();
	await expect(page.locator('text=build')).toBeVisible();
});

test('has has all content', async ({ page }) => {
	await page.goto('/');

	// links
	await expect(page.locator('text=LinkedIn')).toBeVisible();
	// projects
	await expect(page.locator('text=this site')).toBeVisible();
	// can do
	await expect(page.locator('text=JavaScript')).toBeHidden();
	// want to do/learn
	await expect(page.locator('text=Rust')).toBeHidden();
	// currently into
	await expect(page.locator('.card').first()).toBeVisible();
});

test('1rm page loads', async ({ page }) => {
	await page.goto('/1rm');

	await expect(page).toHaveTitle('1rm calculator');
	await expect(page.locator('h1')).toHaveText('1rm calculator');
	await expect(page.locator('.formula')).toHaveCount(7);
});

test('1rm shows default results', async ({ page }) => {
	await page.goto('/1rm');

	// defaults: weight 85.5, reps 5
	const result = (name) => page.locator('.formula', { hasText: name }).locator('+ .formula-result');
	await expect(result('Elpey')).toHaveText('99.74');
	await expect(result('Brzycki')).toHaveText('96.20');
	// Wendler is an alias of Epley
	await expect(result('Wendler')).toHaveText('99.74');
});

test('1rm reacts to input', async ({ page }) => {
	await page.goto('/1rm');

	await page.fill('input[name="weight"]', '100');
	await page.fill('input[name="reps"]', '1');

	await expect(
		page.locator('.formula', { hasText: 'Elpey' }).locator('+ .formula-result')
	).toHaveText('103.33');
});

test('navigates between home and 1rm', async ({ page }) => {
	await page.goto('/');

	await page.getByRole('link', { name: '1rm calculator' }).click();
	await expect(page).toHaveURL(/\/1rm$/);

	await page.getByRole('link', { name: 'darthvid' }).click();
	await expect(page).toHaveURL(/\/$/);
	await expect(page.locator('h1').first()).toHaveText('darthvid');
});

test('homepage links match content.json', async ({ page }) => {
	const content = JSON.parse(
		readFileSync(new URL('../src/lib/data/content.json', import.meta.url), 'utf-8')
	);
	await page.goto('/');

	for (const { title, url } of [...content.links, ...content.projects]) {
		await expect(page.getByRole('link', { name: title, exact: true }).first()).toHaveAttribute(
			'href',
			url
		);
	}
});
