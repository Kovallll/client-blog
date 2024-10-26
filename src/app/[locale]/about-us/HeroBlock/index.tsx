import Image from 'next/image'

import {
    altText,
    cardCaption,
    cardTitle,
    className,
    src,
    statisticInfo,
    text,
} from './config'
import styles from './styles.module.scss'

import ColorsLines from '@components/ColorsLines'

export const HeroBlock = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imageBlock}>
                <div className={styles.topImageOverwiew}>
                    <div className={styles.cardWrap}>
                        <div className={styles.overviewCard}>
                            <p className={styles.cardCaption}>{cardCaption}</p>
                            <p className={styles.cardTitle}>{cardTitle}</p>
                        </div>
                        <p className={styles.text}>{text}</p>
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
                        {statisticInfo.map(({ title, subtitle }) => (
                            <div className={styles.info}>
                                <p className={styles.infoTitle}>{title}</p>
                                <p className={styles.infoSubtitle}>
                                    {subtitle}
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
