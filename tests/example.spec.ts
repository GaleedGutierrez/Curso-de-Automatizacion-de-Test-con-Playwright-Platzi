/* eslint-disable playwright/expect-expect */
import { test } from '@playwright/test';

// eslint-disable-next-line playwright/no-skipped-test
test.skip('From codegen', async ({ page }) => {
	await page.goto('https://codepen.io/');
	await page.locator('[data-test-id="search-input"]').click();
	await page.locator('[data-test-id="search-input"]').fill('duck');
	await page.locator('[data-test-id="search-input"]').press('Enter');
});
