# Client Blog

Client Blog — это приложение для просмотра постов популярных авторов

## Установка

У вас должны быть установлены [зависимости проекта](#зависимости)

1. Клонирование репозитория
   `git clone https://github.com/Kovallll/client-blog`

2. Загрузка зависимостей `yarn install`

3. Запуск приложения `yarn start`

## О приложении

### React

В качестве основной библиотеки использовался [React](https://react.dev/)

### Типизация

В приложении в качестве типизации использовался [Typescript](https://www.typescriptlang.org/)

Для типизации props используется interface.

### Стилизация

Стилизация с помощью sass [Sass](https://sass-lang.com/)

### Тестирование

e2e тестирование с помошью [Playwright](https://playwright.dev/)

### Storybook

Для изоляционного построения пользовательского интерфейса использовался [Storybook](https://storybook.js.org/)

### Линтеры

Для анализа JS кода использовался [Eslint](https://eslint.org/), для его форматирования [Prettier](https://prettier.io/)

### Деплой

Деплой приложения находится на [Vercel](https://vercel.com)

# Интернализация с использованием next-intl

next-intl — это библиотека для интернализации (i18n) приложений на Next.js. Она позволяет легко управлять переводами и поддерживает динамическую подмену языков.

## Установка

Перед началом работы убедитесь, что необходимые библиотеки установлены:

`yarn add next-intl`

## Локализация

Файлы локализации хранятся в папке messages и структура выглядит так:

```
/messages
  ├─ en.ts
  ├─ ru.ts
```

## Конфигурация next-intl

В файле next.config.js используется плагин createNextIntlPlugin, который создаёт псевдоним для предоставления серверным компонентам конфигурации i18n для конкретного запроса:

```
import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin()
const nextConfig = {
    ...
}
export default withNextIntl(nextConfig)
```

## Обработка языковых данных

Состоит из двух частей:

1. Промежуточное ПО: определяет локаль и обрабатывает перенаправления и перезаписи (например, / → /en)
2. Навигационные API: упрощенные оболочки вокруг Next.js ’навигационные API, такие как <Link />

### В файле routing.ts описано общая конфигурация навигационного API:

```
import { createSharedPathnamesNavigation } from 'next-intl/navigation'
import { defineRouting } from 'next-intl/routing'

export const routing = defineRouting({
    locales: ['en', 'ru'],

    defaultLocale: 'en',
})

export const { Link, redirect, usePathname, useRouter } =
    createSharedPathnamesNavigation(routing)

```

### Настройка промежуточного программного обеспечения:

```
import { NextRequest } from 'next/server'
import createMiddleware from 'next-intl/middleware'

import { routing } from './i18n/routing'

import { Paths } from '@constants'

export const config = {
    matcher: ['/', `/(en|ru)/:path*`],
}

export default function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl
    const [, locale] = pathname.split('/')

    if (pathname === '/') {
        request.nextUrl.pathname = `/${locale}/${Paths.Home}`
    }

    const handleI18nRouting = createMiddleware(routing)
    const response = handleI18nRouting(request)
    return response
}

```

Эта конфигурация применяется к текущему запросу и может использоваться для отображения сообщений и других параметров в зависимости от языка пользователя. i18n/requesr.ts

```
import { getRequestConfig } from 'next-intl/server'

import { routing } from './routing'

import { LocaleType } from '@types'

export default getRequestConfig(async ({ locale }) => {
    if (!locale || !routing.locales.includes(locale as LocaleType)) {
        locale = routing.defaultLocale
    }

    return {
        locale,
        messages: (await import(`../../messages/${locale}.ts`)).default,
    }
})
```

## В корневом layout добавлен NextIntlProvider для получения переводов.

```
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
...

const messages = await getMessages()
...
<html lang={locale}>
    <NextIntlClientProvider messages={messages}>
        <ToastContainer />
        <Header />
            <div className={styles.contentWrap}>
                <div className={styles.content}>{children}</div>
            </div>
        <Footer />
    </NextIntlClientProvider>
</html>
```

## Использование

Пример использования в компоненте:

```
import { useTranslations } from 'next-intl'

export const Button = () => {
    const t = useTranslations('JoinUs')

    return (
        <div>
            <Button title={t('buttonTitle')} />
        </div>
    )
}
```

## Интеграция со Storybook

### Next-intl.js

Файл с данными о переводах, который будет использоваться в preview.tsx

```
import en from '../messages/en'
import ru from '../messages/ru'

const messagesByLocale: Record<string, any> = { en, ru }

const nextIntl = {
    defaultLocale: 'en',
    messagesByLocale,
}

export default nextIntl
```

### Prewiew.tsx

```
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
        ...
    },
}

export default preview
```

В preview.tsx доавляется глобальный декоратор, который оборачивает стори в NextIntlClientProvider и AppRouterContext.Provider для совместимости с app router и next-intl

## Main.ts

В данный файл добвляется аддон `storybook-next-intl`
Также для корректной загрузки изображений указан путь к статическим файлам `staticDirs: ['../public'],`


## Зависимости

Node >= 18v

## Ссылки

Мой [gitHub](https://github.com/Kovallll)

```

```
