import test, { expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
    await page.goto('/en/privacy-policy')
})

test.describe('Test Privacy Policy Page', () => {
    test('check elements on page', async ({ page }) => {
        await expect(
            page.getByText('Privacy PolicyLast Updated on')
        ).toBeVisible()
        await expect(
            page.getByRole('heading', { name: 'Privacy Policy' })
        ).toBeVisible()
        await expect(
            page.getByRole('heading', { name: 'Last Updated on 27th January' })
        ).toBeVisible()
        await expect(page.locator('.page_content__V0Abj')).toBeVisible()
    })
})
