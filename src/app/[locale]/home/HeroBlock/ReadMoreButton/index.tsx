'use client'

import styles from './styles.module.scss'

import { Button } from '@components/Button'

export const ReadMoreButton = () => {
    const handleClickReadMore = () => {}

    return (
        <div className={styles.wrap}>
            <Button onClick={handleClickReadMore} title="ReadMore" />
        </div>
    )
}
