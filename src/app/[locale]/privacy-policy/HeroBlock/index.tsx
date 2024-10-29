import { useTranslations } from 'next-intl'

import styles from './styles.module.scss'

export const HeroBlock = () => {
    const t = useTranslations('PrivacyPolicy')

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{t('ppTitle')}</h1>
            <h1 className={styles.subtitle}>{t('ppSubtitle')}</h1>
        </div>
    )
}
