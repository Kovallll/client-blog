import { translate } from './config'
import { JoinButton } from './JoinButton'
import styles from './styles.module.scss'

import { Article } from '@components/Article'

const JoinUs = () => {
    return (
        <div className={styles.container}>
            <Article
                numberCard={1}
                translate={translate}
                withCaption={false}
                className="joinUs"
            />
            <JoinButton />
        </div>
    )
}

export default JoinUs
