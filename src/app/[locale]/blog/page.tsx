import { AllPostsBlock } from './AllPostsBlock'
import { HeroBlock } from './HeroBlock'
import styles from './page.module.scss'

import { CategoryBlock } from '@components/CategoryBlock'
import { JoinUs } from '@components/JoinUs'

export default function Blog() {
    return (
        <div className={styles.page}>
            <HeroBlock />
            <div className={styles.container}>
                <AllPostsBlock />
                <CategoryBlock
                    title="All Categories"
                    className="blogCategories"
                />
                <JoinUs />
            </div>
        </div>
    )
}
