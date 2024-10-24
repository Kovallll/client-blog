import { AboutUsBlock } from './AboutUsBlock'
import { CommetsBlock } from './CommetsBlock'
import { DiscoverBlock } from './DiscoverBlock'
import { FeaturedInBlock } from './FeaturedInBlock'
import { FeaturedPost } from './FeaturedPost'
import { HeroBlock } from './HeroBlock'
import styles from './page.module.scss'

import { AuthorsList } from '@components/AuthorsList'
import { CategoryBlock } from '@components/CategoryBlock'
import { JoinUs } from '@components/JoinUs'

export default function Home() {
    return (
        <div className={styles.page}>
            <HeroBlock />
            <div className={styles.container}>
                <FeaturedPost />
                <AboutUsBlock />
                <CategoryBlock title="Choose A Catagory" />
                <DiscoverBlock />
                <AuthorsList />
                <FeaturedInBlock />
                <CommetsBlock />
                <JoinUs />
            </div>
        </div>
    )
}
