'use client'

import { memo, useRef } from 'react'
import classNames from 'classnames'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

import { useRouter } from 'src/i18n/routing'
import styles from './styles.module.scss'
import { PostCardProps } from './types'

import { Excerpt } from '@components/Excerpt'
import { Paths } from '@constants'

const PostCard = (props: PostCardProps) => {
    const {
        id,
        image,
        className,
        onClick,
        verticalCard = false,
        withSubtitle = true,
    } = props

    const cardRef = useRef(null)
    const router = useRouter()
    const t = useTranslations('Posts')

    const handleClickPostCard = () => {
        if (onClick) {
            onClick(id)
        }
        if (className !== 'featurePost' && !onClick) {
            router.push(`${Paths.BlogPost}/${id}`)
        }
    }

    const style = classNames(styles.card, className ? styles[className] : '', {
        [styles.vertical]: verticalCard,
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
                    <Excerpt>
                        {(colors) =>
                            t.rich(`${Number(id) - 1}.excerptChunk`, colors)
                        }
                    </Excerpt>
                </div>
                <p className={styles.title}>{t(`${Number(id) - 1}.title`)}</p>
                {withSubtitle && (
                    <p className={styles.subtitle}>
                        {t(`${Number(id) - 1}.subtitle`)}
                    </p>
                )}
            </div>
        </article>
    )
}

export default memo(PostCard)
