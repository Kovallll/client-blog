import test, { expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
    await page.goto('/en/blog')
})

test.describe('Test Blog Page', () => {
    test('test hero block', async ({ page }) => {
        await expect(
            page
                .locator('div')
                .filter({ hasText: 'Posted on startupStep-by-step' })
                .nth(3)
        ).toBeVisible()
        await expect(page.getByText('Posted on startup')).toBeVisible()
        await expect(page.getByText('Step-by-step guide to')).toBeVisible()
        await expect(
            page.getByText('By James West | May 23,').first()
        ).toBeVisible()
        await expect(
            page.getByText('Lorem ipsum dolor sit amet,').first()
        ).toBeVisible()
        await expect(
            page.getByRole('button', { name: 'Read More' }).first()
        ).toBeVisible()
        await expect(
            page.getByRole('img', { name: 'blog top image' })
        ).toBeVisible({ timeout: 10000 })

        await page.getByRole('button', { name: 'Read More' }).click()
        await page.waitForURL(/blog-post/)
        await expect(page.url()).toContain('blog-post/18')
    })

    test('test all posts', async ({ page }) => {
        const prevButton = await page.getByRole('button', { name: '< Prev' })
        const nextButton = await page.getByRole('button', { name: 'Next >' })

        await expect(
            page.getByTestId('all-posts').locator('article')
        ).toHaveCount(4)

        await expect(prevButton).toBeDisabled()
        await expect(nextButton).not.toBeDisabled()

        await nextButton.click()
        await nextButton.click()

        await expect(nextButton).toBeDisabled()
    })

    test('test category block', async ({ page }) => {
        await expect(
            page.getByText('All CategoriesbusinessLorem')
        ).toBeVisible()
        await expect(
            page.getByRole('heading', { name: 'All Categories' })
        ).toBeVisible()
        await expect(
            page.getByTestId('categories').locator('article')
        ).toHaveCount(4)
    })

    test('test join us block', async ({ page }) => {
        await expect(
            page
                .locator('div')
                .filter({ hasText: 'Join our team to be a part of' })
                .nth(4)
        ).toBeVisible()
        await expect(
            page.getByText('Join our team to be a part of')
        ).toBeVisible()
        await expect(
            page
                .locator('article')
                .filter({ hasText: 'Join our team to be a part of' })
                .getByRole('paragraph')
                .nth(1)
        ).toBeVisible()
        await expect(
            page.getByRole('button', { name: 'Join Now' })
        ).toBeVisible()

        await page.getByRole('button', { name: 'Join Now' }).click()
        await page.waitForURL(/contact/)
        await expect(page.url()).toContain('contact-us')
    })
})
