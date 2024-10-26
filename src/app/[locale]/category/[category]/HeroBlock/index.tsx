'use client'

import { useParams } from 'next/navigation'

import { excerpt, subtitle } from './config'
import styles from './styles.module.scss'

export const HeroBlock = () => {
    const { category } = useParams()

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.title}>{category}</div>
                <div className={styles.subtitle}>{subtitle}</div>
                <div className={styles.excerpt}>
                    {excerpt}
                    {category}
                </div>
            </div>
        </div>
    )
}
