'use client'

import { memo, useRef } from 'react'
import classNames from 'classnames'
import { useTranslations } from 'next-intl'

import { useRouter } from 'src/i18n/routing'
import styles from './styles.module.scss'
import { CategoryCardProps } from './types'

import { Paths } from '@constants'

const CategoryCard = (props: CategoryCardProps) => {
    const { id, className, Icon, withSubtitle = true } = props

    const cardRef = useRef(null)
    const t = useTranslations('Category')
    const router = useRouter()

    const category = t(`categories.${Number(id) - 1}.category`)
    const subtitle = t(`categories.${Number(id) - 1}.subtitle`)

    const handleClickCard = () => {
        router.push(`${Paths.Category}/${id}`)
    }

    const style = classNames(
        styles.container,
        className ? styles[className] : '',
        {
            [styles.miniCard]: !withSubtitle,
        }
    )

    return (
        <article className={style} onClick={handleClickCard} ref={cardRef}>
            <div className={styles.iconWrap}>{Icon}</div>
            <p className={styles.title}>{category.toLocaleLowerCase()}</p>
            {withSubtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </article>
    )
}

export default memo(CategoryCard)
