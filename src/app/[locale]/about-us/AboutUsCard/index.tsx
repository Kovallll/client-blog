'use client'

import classNames from 'classnames'
import Image from 'next/image'
import { useTranslations } from 'next-intl'

import styles from './styles.module.scss'
import { AboutUsCardProps } from './types'

export const AboutUsCard = (props: AboutUsCardProps) => {
    const { numberCard, image, isReverse = false } = props

    const t = useTranslations(`AboutUsCard.${numberCard - 1}`)

    const style = classNames(styles.card, { [styles.reverse]: isReverse })

    return (
        <div className={style}>
            <div className={styles.textInfo}>
                <p className={styles.title}>{t('title')}</p>
                <p className={styles.subtitle}>{t('subtitle')}</p>
                <p className={styles.text}>{t('text')}</p>
            </div>
            <Image
                alt={image.altText}
                src={image.src}
                width={620}
                height={480}
                className={styles.image}
            />
        </div>
    )
}
