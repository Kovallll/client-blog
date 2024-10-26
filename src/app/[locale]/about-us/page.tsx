import { AboutUsCard } from './AboutUsCard'
import {
    countOfAuthors,
    firstCardImage,
    firstCardSubtitle,
    firstCardText,
    firstCardTitle,
    misionCaption,
    misionSubtitle,
    misionTitle,
    secondCardImage,
    secondCardSubtitle,
    secondCardText,
    secondCardTitle,
    visionCaption,
    visionSubtitle,
    visionTitle,
} from './config'
import { HeroBlock } from './HeroBlock'
import styles from './page.module.scss'

import AboutUsBlock from '@components/AboutUsBlock'
import AuthorsList from '@components/AuthorsList'
import JoinUs from '@components/JoinUs'

export default function AboutUs() {
    return (
        <div className={styles.page}>
            <div className={styles.content}>
                <HeroBlock />
                <AboutUsBlock
                    firstArticle={{
                        caption: misionCaption,
                        title: misionTitle,
                        subtitle: misionSubtitle,
                    }}
                    secondArticle={{
                        caption: visionCaption,
                        title: visionTitle,
                        subtitle: visionSubtitle,
                    }}
                    withLine={false}
                />
                <AboutUsCard
                    title={firstCardTitle}
                    subtitle={firstCardSubtitle}
                    text={firstCardText}
                    image={firstCardImage}
                />
                <AboutUsCard
                    title={secondCardTitle}
                    subtitle={secondCardSubtitle}
                    text={secondCardText}
                    image={secondCardImage}
                    isReverse={true}
                />
                <AuthorsList countAuthors={countOfAuthors} />
                <JoinUs />
            </div>
        </div>
    )
}
