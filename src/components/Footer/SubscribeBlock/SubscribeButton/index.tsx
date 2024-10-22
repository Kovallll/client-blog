'use client'

import { buttonText } from '../config'
import styles from './styles.module.scss'

import { Button } from '@components/Button'

export const SubscribeButton = () => {
    const handleClickSubscribe = () => {}

    return (
        <div className={styles.wrap}>
            <Button onClick={handleClickSubscribe} title={buttonText} />
        </div>
    )
}
