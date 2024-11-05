import { useTranslations } from 'next-intl'

import styles from './styles.module.scss'

export const Head = () => {
    const t = useTranslations('ContactUs')

    return (
        <div className={styles.head}>
            <p className={styles.caption}>{t('caption')}</p>
            <p className={styles.title}>{t('title')}</p>
            <p className={styles.subtitle}>{t('subtitle')}</p>
        </div>
    )
}
