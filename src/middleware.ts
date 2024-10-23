import { NextRequest } from 'next/server'
import createMiddleware from 'next-intl/middleware'

import { routing } from './i18n/routing'

import { Paths } from '@constants'

export const config = {
    matcher: ['/', '/(ru|en)/:path*'],
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
