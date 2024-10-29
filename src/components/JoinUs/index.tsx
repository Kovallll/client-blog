import { useTranslations } from 'use-intl'

import { JoinButton } from './JoinButton'
import styles from './styles.module.scss'

import { Article } from '@components/Article'

const JoinUs = () => {
    const t = useTranslations('JoinUs')
    return (
        <div className={styles.container}>
            <Article
                title={t('title')}
                subtitle={t('subtitle')}
                className="joinUs"
            />
            <JoinButton />
        </div>
    )
}

export default JoinUs
