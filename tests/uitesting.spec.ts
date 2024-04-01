import { test } from '@playwright/test';

test('uitest', async ({ page }) => {
	await page.goto('https://platzi.com/');
	// await page.locator('a[href="/cursos/"]').click();
	// await page.locator('a:has-text("Explorar")').click();
	await page.locator('text=Explorar').click();
	await page.getByRole('button', { name: 'Todas las categorías' }).click();
	await page.getByRole('button', { name: 'Desarrollo e Ingeniería' }).click();
});
