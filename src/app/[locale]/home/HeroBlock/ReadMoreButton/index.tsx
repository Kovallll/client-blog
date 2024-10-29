'use client'

import { useTranslations } from 'next-intl'

import { useRouter } from 'src/i18n/routing'
import styles from './styles.module.scss'
import { ReadMoreButtonProps } from './types'

import Button from '@components/Button'
import { Paths } from '@constants'

export const ReadMoreButton = ({ id }: ReadMoreButtonProps) => {
    const router = useRouter()
    const t = useTranslations('HomePage')

    const handleClickReadMore = () => {
        router.push(`${Paths.BlogPost}/${id}`)
    }

    return (
        <div className={styles.wrap}>
            <Button
                onClick={handleClickReadMore}
                title={t('heroButtonTitle')}
            />
        </div>
    )
}
