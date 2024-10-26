import { subtitle, title } from './config'
import { JoinButton } from './JoinButton'
import styles from './styles.module.scss'

import { Article } from '@components/Article'

const JoinUs = () => {
    return (
        <div className={styles.container}>
            <Article title={title} subtitle={subtitle} className="joinUs" />
            <JoinButton />
        </div>
    )
}

export default JoinUs
