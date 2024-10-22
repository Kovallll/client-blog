import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'

import styles from './layout.module.scss'

import '@styles/base.scss'
import { Footer } from '@components/Footer'
import { Header } from '@components/Header'

export default async function RootLayout({
    children,
    params: { locale },
}: {
    children: React.ReactNode
    params: { locale: string }
}) {
    const messages = await getMessages()

    return (
        <html lang={locale}>
            <body className={styles.container}>
                <NextIntlClientProvider messages={messages}>
                    <Header />
                    <div className={styles.content}>{children}</div>
                    <Footer />
                </NextIntlClientProvider>
            </body>
        </html>
    )
}
