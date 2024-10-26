'use client'

import { memo, useRef } from 'react'
import classNames from 'classnames'

import { useRouter } from 'src/i18n/routing'
import styles from './styles.module.scss'
import { CategoryCardProps } from './types'

import { categoryData, Paths } from '@constants'

const CategoryCard = ({ category, subtitle, className }: CategoryCardProps) => {
    const cardRef = useRef(null)

    const router = useRouter()

    const handleClickCard = () => {
        router.push(`${Paths.Category}/${category.toLowerCase()}`)
    }

    const isWithOutSubtitle = subtitle === undefined ? true : false

    const style = classNames(
        styles.container,
        className ? styles[className] : '',
        {
            [styles.miniCard]: isWithOutSubtitle,
        }
    )

    const { Icon, title } = categoryData[category]

    return (
        <article className={style} onClick={handleClickCard} ref={cardRef}>
            <div className={styles.iconWrap}>{Icon}</div>
            <p className={styles.title}>{title}</p>
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </article>
    )
}

export default memo(CategoryCard)
