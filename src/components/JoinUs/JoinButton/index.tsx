'use client'

import { useRouter } from 'src/i18n/routing'
import { title } from './config'
import styles from './styles.module.scss'

import Button from '@components/Button'
import { Paths } from '@constants'

export const JoinButton = () => {
    const router = useRouter()

    const handleClickJoinButton = () => {
        router.push(Paths.ContactUs)
    }

    return (
        <div className={styles.wrap}>
            <Button onClick={handleClickJoinButton} title={title} />
        </div>
    )
}
