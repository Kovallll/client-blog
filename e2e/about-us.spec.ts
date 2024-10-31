import test, { expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
    await page.goto('/en/about-us')
})

test.describe('Test About Us Page', () => {
    test('check elements on page', async ({ page }) => {
        await expect(
            page.getByText(
                'ABOUT USWe are a team of content writers who share their learningsLorem ipsum'
            )
        ).toBeVisible()
        await expect(page.getByText('ABOUT USWe are a team of')).toBeVisible()
        await expect(page.locator('.styles_text__c0rxk')).toBeVisible()
        await expect(
            page.getByRole('img', { name: 'about image' })
        ).toBeVisible()
        await expect(
            page.getByText('12+Blogs Published18K+Views')
        ).toBeVisible()
        await expect(page.locator('.styles_purpleLine__pwKk6')).toBeVisible()
        await expect(page.locator('.styles_yellowLine__OrWrH')).toBeVisible()
        await expect(page.getByText('+Blogs Published')).toBeVisible()
        await expect(page.getByText('18K+Views on Finsweet')).toBeVisible()
        await expect(page.getByText('30K+Total active Users')).toBeVisible()
        await expect(
            page.getByText('Our misionCreating valuable')
        ).toBeVisible()
        await expect(page.getByText('Our VisionA platform that')).toBeVisible()
        await expect(page.locator('.styles_card__SCBda').first()).toBeVisible()
        await expect(page.locator('div:nth-child(4)').first()).toBeVisible()
        await expect(page.getByText('List of AuthorsFloyd')).toBeVisible()
        await expect(page.locator('.styles_container__isU5F')).toBeVisible()
    })
})
