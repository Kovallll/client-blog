'use client'

import Image from 'next/image'
import { useTranslations } from 'next-intl'

import { altText, className, src, statisticInfo } from './config'
import styles from './styles.module.scss'

import ColorsLines from '@components/ColorsLines'

export const HeroBlock = () => {
    const t = useTranslations('AboutUs')

    return (
        <div className={styles.container}>
            <div className={styles.imageBlock}>
                <div className={styles.topImageOverwiew}>
                    <div className={styles.cardWrap}>
                        <div className={styles.overviewCard}>
                            <p className={styles.cardCaption}>
                                {t('cardCaption')}
                            </p>
                            <p className={styles.cardTitle}>{t('cardTitle')}</p>
                        </div>
                        <p className={styles.text}>{t('heroText')}</p>
                    </div>
                </div>
                <Image
                    alt={altText}
                    src={src}
                    width={1280}
                    height={440}
                    className={styles.image}
                />
                <div className={styles.bottomImageOverwiew}>
                    <div className={styles.statistic}>
                        {statisticInfo.map((_, index) => (
                            <div className={styles.info}>
                                <p className={styles.infoTitle}>
                                    {t(`statisticInfo.${index}.title`)}
                                </p>
                                <p className={styles.infoSubtitle}>
                                    {t(`statisticInfo.${index}.subtitle`)}
                                </p>
                            </div>
                        ))}
                    </div>
                    <ColorsLines isYellowFirts={false} className={className} />
                </div>
            </div>
        </div>
    )
}
