import { test } from '@playwright/test';

test('From codegen', async ({ page }) => {
	await page.goto('https://codepen.io/');
	await page.getByRole('link', { name: 'Search Pens' }).click();
	await page.locator('[data-test-id="search-input"]').click();
	await page.locator('[data-test-id="search-input"]').fill('duck');
	await page.locator('[data-test-id="search-input"]').press('Enter');
});
