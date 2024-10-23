'use client'
import { useRef, useState } from 'react'
import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'

import styles from './styles.module.scss'
import { AuthorCardProps } from './types'

import { socialLinks } from '@constants'
import { useClickOutside } from '@hooks'

export const AuthorCard = ({
    avatarUrl,
    fullName,
    subtitle,
    horizontalCard = false,
}: AuthorCardProps) => {
    const cardRef = useRef(null)
    const [isCardClicked, setIsCardClicked] = useState(false)

    useClickOutside(cardRef, () => {
        setIsCardClicked(false)
    })

    const handleClickCard = () => {
        setIsCardClicked((prev) => !prev)
    }

    const style = classNames(styles.container, {
        [styles.active]: isCardClicked,
        [styles.horizontalCard]: horizontalCard,
    })

    return (
        <article className={style} onClick={handleClickCard} ref={cardRef}>
            <Image
                alt="author avatar"
                src={avatarUrl}
                width={horizontalCard ? 48 : 130}
                height={horizontalCard ? 48 : 130}
                className={styles.image}
            />
            <div className={styles.text}>
                <p className={styles.fullName}>{fullName}</p>
                <p className={styles.subtitle}>{subtitle}</p>
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
