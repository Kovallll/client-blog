import test, { expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
    await page.goto('/')
})

test.describe('Test Home Page', () => {
    test('test russian header', async ({ page }) => {
        await page.getByRole('combobox').isVisible()
        await page.getByRole('combobox').selectOption('ru')
        await expect(
            page.getByText(
                'Modsen Client BlogГлавнаяБлогО НасКонтактыHomeBlogAbout UsContact'
            )
        ).toBeVisible()
        await expect(
            page
                .locator('header')
                .filter({
                    hasText:
                        'Modsen Client BlogГлавнаяБлогО НасКонтактыHomeBlogAbout UsContact',
                })
                .getByRole('paragraph')
        ).toBeVisible()
        await expect(
            page.getByRole('link', { name: 'Главная' }).first()
        ).toBeVisible()
        await expect(
            page.getByRole('link', { name: 'Блог' }).first()
        ).toBeVisible()
        await expect(
            page.getByRole('link', { name: 'О Нас' }).first()
        ).toBeVisible()
        await expect(
            page.getByRole('link', { name: 'Контакты' }).first()
        ).toBeVisible()
        await expect(page.getByRole('combobox')).toBeVisible()
        await expect(
            page.getByRole('button', { name: 'Видео о нас' })
        ).toBeVisible()
    })

    test('test english header', async ({ page }) => {
        await page.getByRole('combobox').selectOption('en')
        await expect(
            page.getByText(
                'Modsen Client BlogHomeBlogAbout UsContact UsHomeBlogAbout UsContact'
            )
        ).toBeVisible()
        await expect(
            page
                .locator('header')
                .filter({
                    hasText:
                        'Modsen Client BlogHomeBlogAbout UsContact UsHomeBlogAbout UsContact',
                })
                .getByRole('paragraph')
        ).toBeVisible()
        await expect(
            page.getByRole('link', { name: 'Home' }).first()
        ).toBeVisible()
        await expect(
            page.getByRole('link', { name: 'Blog' }).first()
        ).toBeVisible()
        await expect(
            page.getByRole('link', { name: 'About Us' }).first()
        ).toBeVisible()
        await expect(
            page.getByRole('link', { name: 'Contact Us' }).first()
        ).toBeVisible()
        await expect(
            page
                .locator('header')
                .filter({
                    hasText:
                        'Modsen Client BlogHomeBlogAbout UsContact UsHomeBlogAbout UsContact',
                })
                .getByRole('combobox')
        ).toBeVisible()
        await expect(
            page.getByRole('button', { name: 'Video about us' })
        ).toBeVisible()
    })

    test('test links', async ({ page }) => {
        await page.getByRole('link', { name: 'Blog' }).first().click()
        await page.waitForURL(/blog/)
        await expect(page.url()).toContain('blog')

        await page.getByRole('link', { name: 'Contact Us' }).first().click()
        await page.waitForURL(/contact/)
        await expect(page.url()).toContain('contact')

        await page.getByRole('link', { name: 'About Us' }).first().click()
        await page.waitForURL(/about/)
        await expect(page.url()).toContain('about')

        await page.getByRole('link', { name: 'Home' }).first().click()
        await page.waitForURL(/home/)
        await expect(page.url()).toContain('home')
    })

    test('test english hero block', async ({ page }) => {
        await page.getByRole('combobox').selectOption('en')

        await expect(
            page.getByRole('img', { name: 'home top image' })
        ).toBeVisible()
        await expect(page.getByText('Posted on startup')).toBeVisible()
        await expect(page.getByText('Step-by-step guide to')).toBeVisible()
        await expect(
            page.locator('.styles_publicationInfo__AzX1U > p')
        ).toBeVisible()
        await expect(
            page.getByText('Lorem ipsum dolor sit amet,').first()
        ).toBeVisible()
        await expect(
            page.getByRole('button', { name: 'Read More', exact: true })
        ).toBeVisible()
    })

    test('test russian hero block', async ({ page }) => {
        await page.getByRole('combobox').selectOption('ru')

        await expect(
            page.getByRole('img', { name: 'home top image' })
        ).toBeVisible()
        await expect(page.getByText('Опубликовано при запуске')).toBeVisible()
        await expect(
            page.getByText('Пошаговое руководство по выбору отличных шрифтов')
        ).toBeVisible()
        await expect(
            page.locator('.styles_publicationInfo__AzX1U > p')
        ).toBeVisible()
        await expect(
            page
                .getByText(
                    'Мне жаль слышать о вашей боли, но мне так жаль слышать о вашей тяжелой работе и '
                )
                .first()
        ).toBeVisible()
        await expect(
            page.getByRole('button', { name: 'Подробнее', exact: true })
        ).toBeVisible()
    })

    test('test hero block readme button', async ({ page }) => {
        await page
            .getByRole('button', { name: 'Read More', exact: true })
            .click()
        await page.waitForURL(/blog-post/)
        await expect(page.url()).toContain('blog-post/17')
    })

    test('test english posts block', async ({ page }) => {
        await page.getByRole('combobox').selectOption('en')

        await expect(
            page.getByText('Featured PostBy James West |')
        ).toBeVisible()
        await expect(
            page.getByRole('heading', { name: 'Featured Post' })
        ).toBeVisible()
        await expect(
            page.getByRole('img', { name: 'feature post image' })
        ).toBeVisible()
        await expect(
            page.locator('.styles_excerpt__D8cXU > p').first()
        ).toBeVisible()
        await expect(
            page.getByText('1 Figma design systems that').first()
        ).toBeVisible()
        await expect(
            page
                .getByText(
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
                )
                .nth(1)
        ).toBeVisible()
        await expect(
            page.getByRole('button', { name: 'Read More >' })
        ).toBeVisible()
        await expect(page.getByText('All PostsView All')).toBeVisible()
        await expect(
            page.getByRole('heading', { name: 'All Posts' })
        ).toBeVisible()
        await expect(
            page.getByRole('button', { name: 'View All' })
        ).toBeVisible()

        await expect(
            page.getByTestId('feature-allposts').locator('article')
        ).toHaveCount(4)
    })

    test('test russian posts block', async ({ page }) => {
        await page.getByRole('combobox').selectOption('ru')

        await expect(
            page.getByRole('heading', { name: 'Избранный пост' })
        ).toBeVisible()
        await expect(
            page.getByText(
                'Избранный постАвтор: Джеймс Уэст | 23 мая 20221 Системы проектирования Figma'
            )
        ).toBeVisible()
        await expect(
            page.getByRole('img', { name: 'feature post image' })
        ).toBeVisible()
        await expect(
            page.locator('.styles_excerpt__D8cXU > p').first()
        ).toBeVisible()
        await expect(
            page.getByText('1 Системы проектирования').first()
        ).toBeVisible()
        await expect(
            page
                .getByText(
                    'Мне жаль слышать о вашей боли, но мне так жаль слышать о вашей тяжелой работе и '
                )
                .nth(1)
        ).toBeVisible()
        await expect(
            page.getByRole('button', { name: 'Подробнее >' })
        ).toBeVisible()
        await expect(
            page.getByRole('heading', { name: 'Все посты' })
        ).toBeVisible()
        await expect(
            page.getByRole('button', { name: 'Просмотреть все' })
        ).toBeVisible()
        await expect(
            page
                .locator('article')
                .filter({ hasText: 'Автор: Джеймс Уэст | 23 мая' })
                .nth(1)
        ).toBeVisible()

        await expect(
            page.getByTestId('feature-allposts').locator('article')
        ).toHaveCount(4)
    })

    test('test posts block readme button', async ({ page }) => {
        await page
            .getByRole('button', { name: 'Read More >', exact: true })
            .click()
        await page.waitForURL(/blog-post/)
        await expect(page.url()).toContain('blog-post/13')
    })

    test('test dynamic import content', async ({ page }) => {
        const oberverDiv = page.getByTestId('observer')

        await expect(
            page
                .locator('section')
                .filter({ hasText: 'About usWe are a community of' })
                .locator('div')
                .nth(1)
        ).not.toBeVisible()

        await expect(
            page.getByText(
                'Choose A CatagorybusinessLorem ipsum dolor sit amet, consectetuer adipiscing'
            )
        ).not.toBeVisible()

        await expect(
            page
                .locator('section')
                .filter({ hasText: 'Why we startedIt started out' })
        ).not.toBeVisible()

        await expect(
            page
                .locator('div')
                .filter({ hasText: /^We areFeatured in$/ })
                .nth(1)
        ).not.toBeVisible()

        await expect(page.getByText('List of AuthorsFloyd')).not.toBeVisible()

        await expect(page.locator('.styles_container__nkBZr')).not.toBeVisible()

        await oberverDiv.scrollIntoViewIfNeeded()

        await expect(
            page
                .locator('section')
                .filter({ hasText: 'About usWe are a community of' })
                .locator('div')
                .nth(1)
        ).toBeVisible({ timeout: 10000 })

        await oberverDiv.scrollIntoViewIfNeeded()

        await expect(
            page.getByText(
                'Choose A CatagorybusinessLorem ipsum dolor sit amet, consectetuer adipiscing'
            )
        ).toBeVisible({ timeout: 10000 })

        await oberverDiv.scrollIntoViewIfNeeded()

        await expect(
            page
                .locator('section')
                .filter({ hasText: 'Why we startedIt started out' })
        ).toBeVisible({ timeout: 10000 })

        await oberverDiv.scrollIntoViewIfNeeded()

        await expect(page.getByText('List of AuthorsFloyd')).toBeVisible({
            timeout: 10000,
        })

        await oberverDiv.scrollIntoViewIfNeeded()

        await expect(
            page
                .locator('div')
                .filter({ hasText: /^We areFeatured in$/ })
                .nth(1)
        ).toBeVisible({ timeout: 10000 })

        await oberverDiv.scrollIntoViewIfNeeded()

        await expect(page.locator('.styles_container__nkBZr')).toBeVisible({
            timeout: 10000,
        })
    })
})
