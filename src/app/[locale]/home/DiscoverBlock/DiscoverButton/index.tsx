'use client'

import styles from './styles.module.scss'

import { Button } from '@components/Button'

export const DiscoverButton = () => {
    const handleClickDiscoverButton = () => {}

    return (
        <div className={styles.wrap}>
            <Button onClick={handleClickDiscoverButton} title="Discover" />
        </div>
    )
}
