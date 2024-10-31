import test, { expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
    await page.goto('/en/blog-post/1')
})

test.describe('Test Blog Post Page', () => {
    test('check elements on page', async ({ page }) => {
        await expect(
            page
                .locator('article')
                .filter({ hasText: 'Floyd MilesContent Writer @' })
        ).toBeVisible()
        await expect(page.getByText('Design tips for designers')).toBeVisible()
        await expect(
            page.locator('article').filter({ hasText: /^startup$/ })
        ).toBeVisible()
        await expect(
            page.getByRole('img', { name: 'post image' }).first()
        ).toBeVisible()
        await expect(
            page.getByText(
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.Lorem'
            )
        ).toBeVisible()
        await expect(page.getByTestId('next-posts')).toBeVisible()
        await expect(
            page.getByTestId('next-posts').locator('article')
        ).toHaveCount(3)
        await expect(page.locator('.styles_container__isU5F')).toBeVisible()
    })
})
