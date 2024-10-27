import React from 'react'
import {
    AppRouterContext,
    type AppRouterInstance,
} from 'next/dist/shared/lib/app-router-context.shared-runtime'
import { NextIntlClientProvider } from 'next-intl'

import nextIntl from './next-intl'

import '../src/styles/global.scss'
import type { Preview } from '@storybook/react'

const preview: Preview = {
    initialGlobals: {
        locale: 'en',
        locales: {
            en: 'English',
            ru: 'Russian',
        },
    },
    parameters: {
        nextIntl,
        meta: {
            decorators: [
                (Story) => (
                    <AppRouterContext.Provider value={{} as AppRouterInstance}>
                        <NextIntlClientProvider messages={{}}>
                            <Story />
                        </NextIntlClientProvider>
                    </AppRouterContext.Provider>
                ),
            ],
        },
        layout: 'centered',
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
        nextjs: {
            appDirectory: true,
        },
    },
}

export default preview
