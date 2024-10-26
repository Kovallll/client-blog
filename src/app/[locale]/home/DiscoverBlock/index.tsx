import Image from 'next/image'

import { altText, caption, className, src, subtitle, title } from './config'
import { DiscoverButton } from './DiscoverButton'
import styles from './styles.module.scss'

import { Article } from '@components/Article'

const DiscoverBlock = () => {
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
                    caption={caption}
                    title={title}
                    subtitle={subtitle}
                    className={className}
                />
                <DiscoverButton />
            </div>
        </section>
    )
}

export default DiscoverBlock
