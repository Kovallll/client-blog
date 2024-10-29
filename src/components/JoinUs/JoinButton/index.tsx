'use client'

import { useTranslations } from 'next-intl'

import { useRouter } from 'src/i18n/routing'
import styles from './styles.module.scss'

import Button from '@components/Button'
import { Paths } from '@constants'

export const JoinButton = () => {
    const router = useRouter()
    const t = useTranslations('JoinUs')
    const handleClickJoinButton = () => {
        router.push(Paths.ContactUs)
    }

    return (
        <div className={styles.wrap}>
            <Button onClick={handleClickJoinButton} title={t('buttonTitle')} />
        </div>
    )
}
