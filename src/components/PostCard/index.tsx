'use client'

import { useRef, useState } from 'react'
import classNames from 'classnames'
import Image from 'next/image'

import { useWindowSize } from 'src/hooks/useWindowSize'
import { useRouter } from 'src/i18n/routing'
import styles from './styles.module.scss'
import { PostCardProps } from './types'

import { Excerpt } from '@components/Excerpt'
import { Paths } from '@constants'
import { useClickOutside } from '@hooks'

export const PostCard = (props: PostCardProps) => {
    const {
        id,
        image,
        subtitle,
        title,
        excerpt,
        className,
        onClick,
        verticalCard = false,
    } = props
    const cardRef = useRef(null)
    const [isClickCard, setIsClickCard] = useState(false)

    const router = useRouter()

    const handleClickPostCard = () => {
        setIsClickCard((prev) => !prev)
        if (onClick) {
            onClick(id)
        }
        router.push(`${Paths.BlogPost}/${id}`)
    }

    useClickOutside(cardRef, () => {
        setIsClickCard(false)
    })

    const size = useWindowSize()

    const style = classNames(styles.card, className ? styles[className] : '', {
        [styles.vertical]: verticalCard || size.width < 768,
        [styles.active]: isClickCard,
    })

    return (
        <article className={style} onClick={handleClickPostCard} ref={cardRef}>
            {image && (
                <Image
                    width={600}
                    height={350}
                    src={image.imageUrl}
                    alt={image.altText ?? ''}
                    className={styles.image}
                />
            )}
            <div className={styles.info}>
                <div className={styles.excerpt}>
                    <Excerpt excerpt={excerpt} />
                </div>
                <p className={styles.title}>{title}</p>
                {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
            </div>
        </article>
    )
}
