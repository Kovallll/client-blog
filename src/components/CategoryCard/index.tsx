'use client'

import { useRef, useState } from 'react'
import classNames from 'classnames'

import styles from './styles.module.scss'
import { CategoryCardProps } from './types'

import { useClickOutside } from '@hooks'

export const CategoryCard = ({ Icon, title, subtitle }: CategoryCardProps) => {
    const cardRef = useRef(null)
    const [isCardClicked, setIsCardClicked] = useState(false)

    useClickOutside(cardRef, () => {
        setIsCardClicked(false)
    })

    const handleClickCard = () => {
        setIsCardClicked((prev) => !prev)
    }

    const isWithOutSubtitle = subtitle === undefined ? true : false

    const style = classNames(styles.container, {
        [styles.miniCard]: isWithOutSubtitle,
        [styles.active]: isCardClicked,
    })

    return (
        <article className={style} onClick={handleClickCard} ref={cardRef}>
            <div className={styles.iconWrap}>{Icon}</div>
            <p className={styles.title}>{title}</p>
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </article>
    )
}
