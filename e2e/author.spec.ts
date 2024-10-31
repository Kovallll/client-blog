import test, { expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
    await page.goto('/en/author/1')
})

test.describe('Test Author Page', () => {
    test('check elements on page', async ({ page }) => {
        await expect(page.locator('.styles_content__fxE4b')).toBeVisible()
        await expect(
            page.getByRole('img', { name: 'author image' })
        ).toBeVisible()
        await expect(
            page.getByText('Hey there, I’m Dianne Russell')
        ).toBeVisible()
        await expect(
            page.getByText('Lorem ipsum dolor sit amet,').first()
        ).toBeVisible()
        await expect(page.locator('.styles_links__pA_Bz')).toBeVisible()
        await expect(page.locator('.styles_yellowLine__OrWrH')).toBeVisible()
        await expect(page.locator('.styles_purpleLine__pwKk6')).toBeVisible()
        await expect(page.getByTestId('author-posts')).toBeVisible()
        await expect(
            page.getByTestId('author-posts').locator('article')
        ).toHaveCount(2)
    })
})
