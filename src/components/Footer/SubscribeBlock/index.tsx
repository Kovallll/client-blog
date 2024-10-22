import { placeholder, title } from './config'
import styles from './styles.module.scss'
import { SubscribeButton } from './SubscribeButton'

import { Input } from '@components/Input'

export const SubscribeBlock = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.subscribeContent}>
                <Input placeholder={placeholder} />
                <SubscribeButton />
            </div>
        </div>
    )
}
