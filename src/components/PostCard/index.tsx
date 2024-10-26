'use client'

import { memo, useRef } from 'react'
import classNames from 'classnames'
import Image from 'next/image'

import { useWindowSize } from 'src/hooks/useWindowSize'
import { useRouter } from 'src/i18n/routing'
import styles from './styles.module.scss'
import { PostCardProps } from './types'

import { Excerpt } from '@components/Excerpt'
import { Paths } from '@constants'
import vars from '@styles/vars.scss'

const PostCard = (props: PostCardProps) => {
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
    const router = useRouter()

    const handleClickPostCard = () => {
        if (onClick) {
            onClick(id)
        } else {
            router.push(`${Paths.BlogPost}/${id}`)
        }
    }

    const size = useWindowSize()

    const style = classNames(styles.card, className ? styles[className] : '', {
        [styles.vertical]: verticalCard || size.width < vars.$sm,
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

export default memo(PostCard)
