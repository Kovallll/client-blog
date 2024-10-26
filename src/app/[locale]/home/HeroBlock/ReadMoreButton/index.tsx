'use client'

import { useRouter } from 'src/i18n/routing'
import { buttonTitle } from '../config'
import styles from './styles.module.scss'
import { ReadMoreButtonProps } from './types'

import Button from '@components/Button'
import { Paths } from '@constants'

export const ReadMoreButton = ({ id }: ReadMoreButtonProps) => {
    const router = useRouter()

    const handleClickReadMore = () => {
        router.push(`${Paths.BlogPost}/${id}`)
    }

    return (
        <div className={styles.wrap}>
            <Button onClick={handleClickReadMore} title={buttonTitle} />
        </div>
    )
}
