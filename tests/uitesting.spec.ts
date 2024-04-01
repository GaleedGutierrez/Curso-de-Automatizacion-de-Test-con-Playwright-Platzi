import { test } from '@playwright/test';

test('uitest', async ({ page }) => {
	await page.goto('https://platzi.com/');
	await page.getByRole('link', { name: 'Explorar' }).click();
	await page.getByRole('button', { name: 'Todas las categorías' }).click();
	await page.getByRole('button', { name: 'Desarrollo e Ingeniería' }).click();
});
