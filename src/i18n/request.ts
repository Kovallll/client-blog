import { getRequestConfig } from 'next-intl/server'

import { routing } from './routing'

import { LocaleType } from '@types'

export default getRequestConfig(async ({ locale }) => {
    if (!locale || !routing.locales.includes(locale as LocaleType)) {
        locale = routing.defaultLocale
    }

    return {
        locale,
        messages: (await import(`../../messages/${locale}.json`)).default,
    }
})
