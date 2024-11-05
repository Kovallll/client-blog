import { ToastContainer } from 'react-toastify'
import { Sen } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'

import styles from './layout.module.scss'

import '@styles/base.scss'
import 'react-toastify/dist/ReactToastify.css'
import { Footer } from '@components/Footer'
import { Header } from '@components/Header'
import emailjs from '@emailjs/browser'

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
    emailjs.init({
        publicKey: process.env.NEXT_PUBLIC_EMAIL_JS_KEY,
    })

    return (
        <html lang={locale} className={sen.className}>
            <head>
                <meta name="description" content="Blog for clients." />
                <meta name="robots" content="all" />
                <link
                    href="https://api.mapbox.com/mapbox-gl-js/v3.6.0/mapbox-gl.css"
                    rel="stylesheet"
                />
                <title>Client Blog</title>
            </head>
            <body className={styles.container}>
                <NextIntlClientProvider messages={messages}>
                    <ToastContainer />
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
