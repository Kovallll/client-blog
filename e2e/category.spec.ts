import test, { expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
    await page.goto('/en/category/2')
})

test.describe('Test Category Page', () => {
    const yellowColor = 'rgb(255, 208, 80)'

    test('check elements on page', async ({ page }) => {
        const search = page.getByPlaceholder('Search for tag...')
        const searchButton = page
            .getByRole('button', { name: 'Search' })
            .first()

        await expect(
            page.getByText('STARTUP', { exact: true }).first()
        ).toBeVisible()
        await expect(
            page.getByText('Lorem ipsum dolor sit amet,').first()
        ).toBeVisible()
        await expect(page.getByText('Blog > STARTUP')).toBeVisible()
        await expect(search).toBeVisible()
        await expect(searchButton).toBeVisible()
        await expect(page.getByText('Categories')).toBeVisible()
        await expect(page.getByText('All Tags')).toBeVisible()
        await expect(
            page.getByTestId('category-cards').locator('article')
        ).toHaveCount(4)
        await expect(
            page.getByTestId('category-cards').locator('article').nth(1)
        ).toHaveCSS('background-color', yellowColor)
        await expect(
            page.getByTestId('category-posts').locator('article')
        ).toHaveCount(4)
        await expect(
            page.getByTestId('category-tags').locator('p')
        ).toHaveCount(6)
    })

    test('test failed search category', async ({ page }) => {
        const search = page.getByPlaceholder('Search for tag...')
        const searchButton = page
            .getByRole('button', { name: 'Search' })
            .first()
        const noPosts = page.getByText('There are no posts for this')

        await expect(noPosts).not.toBeVisible()
        await search.fill('test')
        await searchButton.click()
        await expect(noPosts).toBeVisible()
    })

    test('test search category', async ({ page }) => {
        const search = page.getByPlaceholder('Search for tag...')
        const searchButton = page
            .getByRole('button', { name: 'Search' })
            .first()

        await search.fill('Experience')
        await searchButton.click()
        await expect(
            page.getByTestId('category-posts').locator('article')
        ).toHaveCount(3)
    })

    test('test search for tag category', async ({ page }) => {
        const expTag = page.getByText('Experience')

        await expTag.click()
        await expect(expTag).toHaveCSS('background-color', yellowColor)
        await expect(
            page.getByTestId('category-posts').locator('article')
        ).toHaveCount(3)
    })

    test('test click card category', async ({ page }) => {
        const categoryCard = page
            .getByTestId('category-cards')
            .locator('article')
            .first()

        await categoryCard.click()

        await page.waitForURL(/category\/1/)
        await expect(page.url()).toContain('category/1')
        await expect(categoryCard).toHaveCSS('background-color', yellowColor)
    })
})
