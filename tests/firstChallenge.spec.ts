import { expect, test } from '@playwright/test';

const URL_BASE = new URL('https://automationexercise.com');
const URL_PRODUCT_DETAILS_FIRST = new URL('/product_details/1', URL_BASE);

// eslint-disable-next-line playwright/no-skipped-test
test.describe.skip('Fist challenge', () => {
	test('Add product to cart', async ({ page }) => {
		const SCROLL_DOWN = 640;

		await page.goto(URL_BASE.href);
		await page.mouse.wheel(0, SCROLL_DOWN);
		await page.getByRole('link', { name: 'View Product' }).first().click();
		await expect(page).toHaveURL(URL_PRODUCT_DETAILS_FIRST.href);

		const QUANTITY_INPUT = page.locator('#quantity');
		const ADD_TO_CART_BUTTON = page.locator('#quantity ~ button');

		await QUANTITY_INPUT.dblclick();
		await QUANTITY_INPUT.fill('3');
		await expect(QUANTITY_INPUT).toHaveValue('3');
		await ADD_TO_CART_BUTTON.click();

		const ADDED_MODAL = page.locator('#cartModal');

		await expect(ADDED_MODAL).toBeVisible();
		await expect(ADDED_MODAL).toContainText('Added!');
		await ADDED_MODAL.getByRole('button').click();
		await expect(ADDED_MODAL).toBeHidden();
	});
});
