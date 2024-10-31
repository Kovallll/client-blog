import Image from 'next/image'

import { altText, className, src, translate } from './config'
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
                    translate={translate}
                    numberCard={1}
                    className={className}
                />
                <DiscoverButton />
            </div>
        </section>
    )
}

export default DiscoverBlock
