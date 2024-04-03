/* eslint-disable playwright/expect-expect */
import { test } from '@playwright/test';

test('uitest', async ({ page }) => {
	await page.goto('https://demoqa.com/automation-practice-form');

	const INPUT = page.locator('#firstName');
	const HEADER = page.locator('header');

	const OPTION = page
		.locator('.header-wrapper')
		.filter({ hasText: 'Widgets' });

	await INPUT.waitFor();
	await OPTION.waitFor();
	await HEADER.waitFor();
	// await page.locator('a[href="/cursos/"]').click();
	// await page.locator('a:has-text("Explorar")').click();
	// await page.locator('text=Explorar').click();
	// await page.getByRole('button', { name: 'Todas las categorías' }).click();
	// await page.getByRole('button', { name: 'Desarrollo e Ingeniería' }).click();
});
