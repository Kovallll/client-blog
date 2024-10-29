import Image from 'next/image'
import { useTranslations } from 'use-intl'

import { altText, className, src } from './config'
import { DiscoverButton } from './DiscoverButton'
import styles from './styles.module.scss'

import { Article } from '@components/Article'

const DiscoverBlock = () => {
    const t = useTranslations('HomePage')
    return (
        <section className={styles.container}>
            <Image
                src={src}
                alt={altText}
                width={900}
                height={700}
                className={styles.image}
            />
            <div className={styles.info}>
                <Article
                    caption={t('discover.caption')}
                    title={t('discover.title')}
                    subtitle={t('discover.subtitle')}
                    className={className}
                />
                <DiscoverButton />
            </div>
        </section>
    )
}

export default DiscoverBlock
