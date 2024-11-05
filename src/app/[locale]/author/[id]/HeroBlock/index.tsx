import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

import { altText, className, imageHeight, imageWidth } from './config'
import styles from './styles.module.scss'
import { HeroBlockProps } from './types'

import ColorsLines from '@components/ColorsLines'
import { socialLinks } from '@constants'

export const HeroBlock = ({ authorData }: HeroBlockProps) => {
    const { avatarPageUrl, id } = authorData

    const t = useTranslations('Author')

    return (
        <div className={styles.container}>
            <div className={styles.wrap}>
                <div className={styles.content}>
                    <Image
                        alt={altText}
                        src={avatarPageUrl}
                        width={imageWidth}
                        height={imageHeight}
                        className={styles.image}
                        loading="lazy"
                    />
                    <div className={styles.info}>
                        <p className={styles.title}>
                            {t('beforeNameText')}
                            {t(`authors.${Number(id) - 1}.fullName`)}
                            {t('afterNameText')}
                        </p>
                        <p className={styles.text}>
                            {t(`authors.${Number(id) - 1}.text`)}
                        </p>
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
