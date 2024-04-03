import { expect, test } from '@playwright/test';

test('Playing with assertions', async ({ page }) => {
	await page.goto('https://demoqa.com/text-box');

	const FULL_NAME_INPUT = page.getByPlaceholder('Full Name');

	await expect(FULL_NAME_INPUT).toBeVisible();
	await FULL_NAME_INPUT.fill('Galeed');
	await page.getByRole('button', { name: 'Submit' }).click();

	const OUTPUT_NAME = page.locator('#name');

	await expect(OUTPUT_NAME).toContainText('Name:Galeed');
});
