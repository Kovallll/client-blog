import { JoinButton } from './JoinButton'
import styles from './styles.module.scss'

import { Article } from '@components/Article'

export const JoinUs = () => {
    return (
        <div className={styles.container}>
            <Article
                title="Join our team to be a part of our story"
                subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
                className="joinUs"
            />
            <JoinButton />
        </div>
    )
}
