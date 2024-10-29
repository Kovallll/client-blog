'use client'

import { useTranslations } from 'use-intl'

import { AboutUsCard } from './AboutUsCard'
import { countOfAuthors, firstCardImage, secondCardImage } from './config'
import { HeroBlock } from './HeroBlock'
import styles from './page.module.scss'

import AboutUsBlock from '@components/AboutUsBlock'
import AuthorsList from '@components/AuthorsList'
import JoinUs from '@components/JoinUs'

export default function AboutUs() {
    const t = useTranslations('AboutUs')

    return (
        <div className={styles.page}>
            <div className={styles.content}>
                <HeroBlock />
                <AboutUsBlock
                    firstArticle={{
                        caption: t('misionCaption'),
                        title: t('misionTitle'),
                        subtitle: t('misionSubtitle'),
                    }}
                    secondArticle={{
                        caption: t('visionCaption'),
                        title: t('visionTitle'),
                        subtitle: t('visionSubtitle'),
                    }}
                    withLine={false}
                />
                <AboutUsCard
                    title={t('firstCardTitle')}
                    subtitle={t('firstCardSubtitle')}
                    text={t('firstCardText')}
                    image={firstCardImage}
                />
                <AboutUsCard
                    title={t('secondCardTitle')}
                    subtitle={t('secondCardSubtitle')}
                    text={t('secondCardText')}
                    image={secondCardImage}
                    isReverse={true}
                />
                <AuthorsList countAuthors={countOfAuthors} />
                <JoinUs />
            </div>
        </div>
    )
}
