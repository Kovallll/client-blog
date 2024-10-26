import { HeroBlock } from './HeroBlock'
import { MainContent } from './MainContent'
import styles from './page.module.scss'

export default function Category() {
    return (
        <div className={styles.page}>
            <HeroBlock />
            <div className={styles.content}>
                <MainContent />
            </div>
        </div>
    )
}
