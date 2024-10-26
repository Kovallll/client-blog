'use client'

import { useRouter } from 'src/i18n/routing'
import { buttonTitle } from '../config'
import styles from './styles.module.scss'

import Button from '@components/Button'
import { Paths } from '@constants'

export const DiscoverButton = () => {
    const router = useRouter()

    const handleClickDiscoverButton = () => {
        router.push(Paths.AboutUs)
    }

    return (
        <div className={styles.wrap}>
            <Button onClick={handleClickDiscoverButton} title={buttonTitle} />
        </div>
    )
}
