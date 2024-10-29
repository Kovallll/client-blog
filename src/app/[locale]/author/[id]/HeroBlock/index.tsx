import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

import { altText, className } from './config'
import styles from './styles.module.scss'
import { HeroBlockProps } from './types'

import ColorsLines from '@components/ColorsLines'
import { socialLinks } from '@constants'

export const HeroBlock = ({ authorData }: HeroBlockProps) => {
    const { avatarUrl, id } = authorData

    const t = useTranslations('Author')

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
                            {t('beforeNameText')}
                            {t(`authors.${id}.fullName`)}
                            {t('afterNameText')}
                        </p>
                        <p className={styles.text}>{t(`authors.${id}.text`)}</p>
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
