import { contentData } from './config'
import { ContentBlock } from './ContentBlock'
import { HeroBlock } from './HeroBlock'
import styles from './page.module.scss'

export default function Home() {
    return (
        <div className={styles.page}>
            <HeroBlock />
            <div className={styles.content}>
                {contentData.map((content, index) => (
                    <ContentBlock
                        contentData={content}
                        index={index}
                        key={index}
                    />
                ))}
            </div>
        </div>
    )
}
