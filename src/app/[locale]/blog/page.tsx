import { AllPostsBlock } from './AllPostsBlock'
import { categoryClass, translate } from './config'
import { HeroBlock } from './HeroBlock'
import styles from './page.module.scss'

import CategoryBlock from '@components/CategoryBlock'
import JoinUs from '@components/JoinUs'

export default function Blog() {
    return (
        <div className={styles.page}>
            <HeroBlock />
            <div className={styles.content}>
                <AllPostsBlock />
                <CategoryBlock
                    translate={translate}
                    className={categoryClass}
                />
                <JoinUs />
            </div>
        </div>
    )
}
