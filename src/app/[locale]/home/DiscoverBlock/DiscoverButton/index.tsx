'use client'

import { useTranslations } from 'use-intl'

import { useRouter } from 'src/i18n/routing'
import styles from './styles.module.scss'

import Button from '@components/Button'
import { Paths } from '@constants'

export const DiscoverButton = () => {
    const router = useRouter()
    const t = useTranslations('Article.Discover.0')

    const handleClickDiscoverButton = () => {
        router.push(Paths.AboutUs)
    }

    return (
        <div className={styles.wrap}>
            <Button
                onClick={handleClickDiscoverButton}
                title={t('buttonTitle')}
            />
        </div>
    )
}
