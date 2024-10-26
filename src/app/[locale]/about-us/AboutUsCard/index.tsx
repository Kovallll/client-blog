import classNames from 'classnames'
import Image from 'next/image'

import styles from './styles.module.scss'
import { AboutUsCardProps } from './types'

export const AboutUsCard = (props: AboutUsCardProps) => {
    const { title, subtitle, text, image, isReverse = false } = props

    const style = classNames(styles.card, { [styles.reverse]: isReverse })

    return (
        <div className={style}>
            <div className={styles.textInfo}>
                <p className={styles.title}>{title}</p>
                <p className={styles.subtitle}>{subtitle}</p>
                <p className={styles.text}>{text}</p>
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
