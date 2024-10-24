import Image from 'next/image'

import { ReadMoreButton } from './ReadMoreButton'
import styles from './styles.module.scss'

import { Excerpt } from '@components/Excerpt'
import { ExcerptType } from '@types'

export const HeroBlock = () => {
    const excerpt: ExcerptType = {
        afterText: 'By ',
        highlightText: 'James West',
        beforeText: ' | May 23, 2022',
        color: 'purple',
    }
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <p className={styles.caption}>
                    Posted on
                    <span className={styles.captionBold}> startup</span>
                </p>
                <p className={styles.title}>
                    Step-by-step guide to choosing great font pairs
                </p>
                <Excerpt excerpt={excerpt} />
                <p className={styles.subtitle}>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident.
                </p>
                <ReadMoreButton />
            </div>
            <Image
                width={520}
                height={360}
                alt="home top image"
                src="/images/blogTopImage.png"
                className={styles.image}
            />
        </div>
    )
}
