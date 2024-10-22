import { InfoBlock } from './InfoBlock'
import styles from './styles.module.scss'
import { SubscribeBlock } from './SubscribeBlock'

import { Header } from '@components/Header'

export const Footer = () => {
    return (
        <div className={styles.container}>
            <Header withVideo={false} className="footer" />
            <SubscribeBlock />
            <InfoBlock />
        </div>
    )
}
