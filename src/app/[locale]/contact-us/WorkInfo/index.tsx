import { useTranslations } from 'use-intl'

import styles from './styles.module.scss'

export const WorkInfo = () => {
    const t = useTranslations('ContactUs')

    return (
        <div className={styles.container}>
            <div className={styles.work}>
                <p className={styles.title}>{t('work.title')}</p>
                <div className={styles.info}>
                    <p className={styles.caption}>{t('work.date')}</p>
                    <p className={styles.caption}>{t('work.time')}</p>
                    <p className={styles.text}>{t('work.text')}</p>
                </div>
            </div>
            <div className={styles.contact}>
                <p className={styles.title}>{t('work.contactUsTitle')}</p>
                <div className={styles.info}>
                    <p className={styles.caption}>{t('work.contactId')}</p>
                    <p className={styles.text}>{t('work.email')}</p>
                </div>
            </div>
        </div>
    )
}
