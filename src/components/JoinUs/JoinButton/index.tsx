'use client'

import styles from './styles.module.scss'

import { Button } from '@components/Button'

export const JoinButton = () => {
    const handleClickJoinButton = () => {}

    return (
        <div className={styles.wrap}>
            <Button onClick={handleClickJoinButton} title="Join Now" />
        </div>
    )
}
