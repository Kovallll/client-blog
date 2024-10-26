import { className } from './config'
import { FooterInfoBlock } from './FooterInfoBlock'
import styles from './styles.module.scss'
import SubscribeBlock from './SubscribeBlock'

import { Header } from '@components/Header'

export const Footer = () => {
    return (
        <div className={styles.container}>
            <Header
                withVideo={false}
                className={className}
                withPrivacy={true}
            />
            <SubscribeBlock />
            <FooterInfoBlock />
        </div>
    )
}
