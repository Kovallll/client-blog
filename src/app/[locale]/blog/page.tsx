'use client'

import { useTranslations } from 'use-intl'

import { AllPostsBlock } from './AllPostsBlock'
import { categoryClass } from './config'
import { HeroBlock } from './HeroBlock'
import styles from './page.module.scss'

import CategoryBlock from '@components/CategoryBlock'
import JoinUs from '@components/JoinUs'

export default function Blog() {
    const t = useTranslations('Category')

    return (
        <div className={styles.page}>
            <HeroBlock />
            <div className={styles.content}>
                <AllPostsBlock />
                <CategoryBlock
                    title={t('allCategoryTitle')}
                    className={categoryClass}
                />
                <JoinUs />
            </div>
        </div>
    )
}
