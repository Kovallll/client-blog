'use client'

import dynamic from 'next/dynamic'
import { useTranslations } from 'use-intl'

import { Form } from './Form'
import { Loader } from './Map/Loader'
import styles from './page.module.scss'
import { WorkInfo } from './WorkInfo'

const Map = dynamic(() => import('./Map'), {
    ssr: false,
    loading: () => <Loader />,
})

export default function Home() {
    const t = useTranslations('ContactUs')

    return (
        <div className={styles.page}>
            <div className={styles.content}>
                <div className={styles.head}>
                    <p className={styles.caption}>{t('caption')}</p>
                    <p className={styles.title}>{t('title')}</p>
                    <p className={styles.subtitle}>{t('subtitle')}</p>
                </div>
                <WorkInfo />
                <Form />
            </div>
            <Map />
        </div>
    )
}
