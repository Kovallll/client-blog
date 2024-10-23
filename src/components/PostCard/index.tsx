'use client'

import { useRef, useState } from 'react'
import classNames from 'classnames'
import Image from 'next/image'

import styles from './styles.module.scss'
import { PostCardProps } from './types'

import { useClickOutside } from '@hooks'

export const PostCard = (props: PostCardProps) => {
    const {
        id,
        imageUrl,
        altText,
        subtitle,
        title,
        excerpt,
        className,
        onClick,
        verticalCard = false,
    } = props
    const cardRef = useRef(null)
    const [isClickCard, setIsClickCard] = useState(false)
    const style = classNames(styles.card, className ? styles[className] : '', {
        [styles.vertical]: verticalCard,
        [styles.active]: isClickCard,
    })

    const handleClickPostCard = () => {
        setIsClickCard((prev) => !prev)
        if (onClick) {
            onClick(id)
        }
    }

    useClickOutside(cardRef, () => {
        setIsClickCard(false)
    })

    return (
        <article className={style} onClick={handleClickPostCard} ref={cardRef}>
            {imageUrl && (
                <Image
                    width={600}
                    height={350}
                    src={imageUrl}
                    alt={altText ?? ''}
                    className={styles.image}
                />
            )}
            <div className={styles.info}>
                <p className={styles.excerpt}>{excerpt}</p>
                <p className={styles.title}>{title}</p>
                {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
            </div>
        </article>
    )
}
