import test, { expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
    await page.goto('/en/contact-us')
})

test.describe('Test Contact Us Page', () => {
    test('check elements on page', async ({ page }) => {
        await expect(page.getByText("Contact usLet's Start a")).toBeVisible()
        await expect(
            page.getByText('Contact us', { exact: true })
        ).toBeVisible()
        await expect(page.getByText("Let's Start a Conversation")).toBeVisible()
        await expect(
            page.getByText('Lorem ipsum dolor sit amet,')
        ).toBeVisible()
        await expect(page.locator('.styles_container__yqKqk')).toBeVisible()
        await expect(page.getByText('Working hoursMonday To')).toBeVisible()
        await expect(
            page.getByText('Contact Us020 7993 2905hello@')
        ).toBeVisible()
        await expect(page.getByPlaceholder('Full Name')).toBeVisible()
        await expect(
            page.getByPlaceholder('Your Email', { exact: true })
        ).toBeVisible()
        await expect(page.locator('#query')).toBeVisible()
        await expect(page.getByPlaceholder('Message')).toBeVisible()
        await expect(
            page.getByRole('button', { name: 'Send Message' })
        ).toBeVisible()
        await expect(page.getByLabel('Map', { exact: true })).toBeVisible()
    })

    test('test error from', async ({ page }) => {
        await page.getByPlaceholder('Full Name')
        await page.getByPlaceholder('Your Email', { exact: true })
        await page.getByRole('button', { name: 'Send Message' }).click()
        await expect(page.getByText('Email is required')).toBeVisible()
        await expect(page.getByText('Full Name is required')).toBeVisible()
    })

    test('test succes from', async ({ page }) => {
        await page.getByPlaceholder('Full Name').fill('Test')
        await page
            .getByPlaceholder('Your Email', { exact: true })
            .fill('test@test.com')
        await page.getByTestId('form-select').selectOption('Query2')
        await page.getByPlaceholder('Message').fill('Hello World!')
        await page.getByRole('button', { name: 'Send Message' }).click()
        await expect(page.locator('[id="\\32 "]')).toBeVisible({
            timeout: 10000,
        })
    })
})
