'use client'

import { useParams } from 'next/navigation'

import styles from './page.module.scss'

export default function Home() {
    const { id } = useParams()

    return (
        <div className={styles.page}>
            <div className={styles.content}>Author {id}</div>
        </div>
    )
}
