'use client'

import { memo, useRef } from 'react'
import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

import { useRouter } from 'src/i18n/routing'
import {
    altText,
    imageCardHeight,
    imageCardWidth,
    imagePageHeight,
    imagePageWidth,
} from './config'
import styles from './styles.module.scss'
import { AuthorCardProps } from './types'

import { Paths, socialLinks } from '@constants'

const AuthorCard = (props: AuthorCardProps) => {
    const { author, horizontalCard = false, className } = props

    const t = useTranslations('Author')

    const cardRef = useRef(null)

    const router = useRouter()

    const handleClickCard = () => {
        router.push(`${Paths.Author}/${author.id}`)
    }

    const style = classNames(
        styles.container,
        className ? styles[className] : '',
        {
            [styles.horizontalCard]: horizontalCard,
        }
    )

    const fullName = t(`authors.${Number(author.id) - 1}.fullName`)
    const description = t(`authors.${Number(author.id) - 1}.description`)
    const imageWidth = horizontalCard ? imageCardWidth : imagePageWidth
    const imageHeight = horizontalCard ? imageCardHeight : imagePageHeight

    return (
        <article className={style} onClick={handleClickCard} ref={cardRef}>
            <Image
                alt={altText}
                src={author.avatarUrl}
                width={imageWidth}
                height={imageHeight}
                className={styles.image}
            />
            <div className={styles.text}>
                <p className={styles.fullName}>{fullName}</p>
                <p className={styles.description}>{description}</p>
            </div>
            <div className={styles.links}>
                {socialLinks.map(({ icon, path }) => (
                    <Link href={path} key={path} className={styles.link}>
                        {icon}
                    </Link>
                ))}
            </div>
        </article>
    )
}

export default memo(AuthorCard)
