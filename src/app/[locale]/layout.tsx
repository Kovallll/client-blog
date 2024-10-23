import { Sen } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'

import styles from './layout.module.scss'

import '@styles/base.scss'
import { Footer } from '@components/Footer'
import { Header } from '@components/Header'

const sen = Sen({
    subsets: ['latin'],
    display: 'swap',
})

export default async function RootLayout({
    children,
    params: { locale },
}: {
    children: React.ReactNode
    params: { locale: string }
}) {
    const messages = await getMessages()
    //redirect(Paths.Home)
    return (
        <html lang={locale} className={sen.className}>
            <body className={styles.container}>
                <NextIntlClientProvider messages={messages}>
                    <Header />
                    <div className={styles.contentWrap}>
                        <div className={styles.content}>{children}</div>
                    </div>
                    <Footer />
                </NextIntlClientProvider>
            </body>
        </html>
    )
}
