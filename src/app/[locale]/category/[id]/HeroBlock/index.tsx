'use client'

import { useParams } from 'next/navigation'
import { useTranslations } from 'next-intl'

import styles from './styles.module.scss'

export const HeroBlock = () => {
    const { id } = useParams()

    const t = useTranslations('CategoryPage')
    const tHeader = useTranslations('Header')
    const tCategory = useTranslations('Category')

    const title = tCategory(`categories.${Number(id) - 1}.category`)
    const subtitle = t('cagegorySubtitle')
    const excerpt =
        tHeader('nav./blog') +
        ' > ' +
        tCategory(`categories.${Number(id) - 1}.category`)

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.title}>{title}</div>
                <div className={styles.subtitle}>{subtitle}</div>
                <div className={styles.excerpt}>{excerpt}</div>
            </div>
        </div>
    )
}
