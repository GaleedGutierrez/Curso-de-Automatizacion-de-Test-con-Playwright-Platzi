import { expect, test } from '@playwright/test';

const URL_BASE = new URL('https://playwright.dev');

test.beforeEach(async ({ page }) => {
	await page.goto(URL_BASE.href);
});

test('Realizar una búsqueda que no tenga resultados', async ({ page }) => {
	await page.getByLabel('Search').click();
	await page.getByPlaceholder('Search docs').click();
	await page.getByPlaceholder('Search docs').fill('hascontent');

	const NO_RESULTS_MESSAGE = page.locator(
		'.DocSearch-NoResults p.DocSearch-Title',
	);

	await expect(NO_RESULTS_MESSAGE).toBeVisible();
	await expect(NO_RESULTS_MESSAGE).toHaveText('No results for "hascontent"');
});

test.skip('Limpiar el input de busqueda', async ({ page }) => {
	await page.getByRole('button', { name: 'Search' }).click();

	const searchBox = page.getByPlaceholder('Search docs');

	await searchBox.click();

	await searchBox.fill('somerandomtext');

	await expect(searchBox).toHaveText('somerandomtext');

	await page.getByRole('button', { name: 'Clear the query' }).click();

	await expect(searchBox).toHaveAttribute('value', '');
});

test.skip('Realizar una busqueda que genere al menos tenga un resultado', async ({
	page,
}) => {
	await page.getByRole('button', { name: 'Search ' }).click();

	const searchBox = page.getByPlaceholder('Search docs');

	await searchBox.click();

	await page.getByPlaceholder('Search docs').fill('havetext');

	await expect(searchBox).toHaveText('havetext');

	// Verity there are sections in the results
	await page
		.locator('.DocSearch-Dropdown-Container section')
		.nth(1)
		.waitFor();

	const numberOfResults = await page
		.locator('.DocSearch-Dropdown-Container section')
		.count();

	// eslint-disable-next-line @typescript-eslint/no-confusing-void-expression, @typescript-eslint/await-thenable
	await expect(numberOfResults).toBeGreaterThan(0);
});
