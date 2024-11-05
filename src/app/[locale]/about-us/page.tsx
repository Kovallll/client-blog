import { AboutUsCard } from './AboutUsCard'
import { countOfAuthors, firstCardImage, secondCardImage } from './config'
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
                <AboutUsBlock translate="AboutUs" withLine={false} />
                <AboutUsCard numberCard={1} image={firstCardImage} />
                <AboutUsCard
                    numberCard={2}
                    image={secondCardImage}
                    isReverse={true}
                />
                <AuthorsList countAuthors={countOfAuthors} />
                <JoinUs />
            </div>
        </div>
    )
}
