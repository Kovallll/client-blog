'use client'

import { memo, useRef } from 'react'
import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'

import { useRouter } from 'src/i18n/routing'
import { altText } from './config'
import styles from './styles.module.scss'
import { AuthorCardProps } from './types'

import { Paths, socialLinks } from '@constants'

const AuthorCard = (props: AuthorCardProps) => {
    const { author, subtitle, horizontalCard = false, className } = props

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

    const subtitleText = subtitle ? subtitle : author.description

    return (
        <article className={style} onClick={handleClickCard} ref={cardRef}>
            <Image
                alt={altText}
                src={author.avatarUrl}
                width={horizontalCard ? 48 : 130}
                height={horizontalCard ? 48 : 130}
                className={styles.image}
            />
            <div className={styles.text}>
                <p className={styles.fullName}>{author.fullName}</p>
                <p className={styles.subtitle}>{subtitleText}</p>
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
