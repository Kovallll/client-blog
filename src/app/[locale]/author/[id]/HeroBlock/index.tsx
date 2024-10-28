import Image from 'next/image'
import Link from 'next/link'

import {
    afterNameText,
    altText,
    beforeNameText,
    className,
    text,
} from './config'
import styles from './styles.module.scss'
import { HeroBlockProps } from './types'

import ColorsLines from '@components/ColorsLines'
import { socialLinks } from '@constants'

export const HeroBlock = ({ authorData }: HeroBlockProps) => {
    const { avatarUrl, fullName } = authorData
    return (
        <div className={styles.container}>
            <div className={styles.wrap}>
                <div className={styles.content}>
                    <Image
                        alt={altText}
                        src={avatarUrl}
                        width={250}
                        height={300}
                        className={styles.image}
                    />
                    <div className={styles.info}>
                        <p className={styles.title}>
                            {beforeNameText}
                            {fullName}
                            {afterNameText}
                        </p>
                        <p className={styles.text}>{text}</p>
                        <div className={styles.links}>
                            {socialLinks.map(({ icon, path }) => (
                                <Link
                                    href={path}
                                    key={path}
                                    className={styles.link}
                                >
                                    {icon}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
                <ColorsLines isYellowFirts={true} className={className} />
            </div>
        </div>
    )
}
