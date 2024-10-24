'use client'

import { useRef, useState } from 'react'
import classNames from 'classnames'

import styles from './styles.module.scss'
import { CategoryCardProps } from './types'

import { categoryData } from '@constants'
import { useClickOutside } from '@hooks'

export const CategoryCard = ({
    category,
    subtitle,
    className,
}: CategoryCardProps) => {
    const cardRef = useRef(null)
    const [isCardClicked, setIsCardClicked] = useState(false)

    useClickOutside(cardRef, () => {
        setIsCardClicked(false)
    })

    const handleClickCard = () => {
        setIsCardClicked((prev) => !prev)
    }

    const isWithOutSubtitle = subtitle === undefined ? true : false

    const style = classNames(
        styles.container,
        className ? styles[className] : '',
        {
            [styles.miniCard]: isWithOutSubtitle,
            [styles.active]: isCardClicked,
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
