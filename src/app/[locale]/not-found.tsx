import { useTranslations } from 'next-intl'

import styles from './layout.module.scss'

export default function NotFoundPage() {
    const t = useTranslations('NotFoundPage')
    return <h1 className={styles.notFound}>{t('title')}</h1>
}
