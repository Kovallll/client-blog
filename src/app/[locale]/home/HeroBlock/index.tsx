import Image from 'next/image'

import { ReadMoreButton } from './ReadMoreButton'
import styles from './styles.module.scss'

export const HeroBlock = () => {
    return (
        <div className={styles.container}>
            <Image
                width={1440}
                height={720}
                alt="home top image"
                src="/images/homeTopImage.png"
                className={styles.image}
            />
            <div className={styles.overlay}></div>
            <div className={styles.content}>
                <p className={styles.caption}>
                    Posted on
                    <span className={styles.captionBold}>startup</span>
                </p>
                <p className={styles.title}>
                    Step-by-step guide to choosing great font pairs
                </p>
                <p className={styles.publicationInfo}>
                    By James West | May 23, 2022
                </p>
                <p className={styles.subtitle}>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident.
                </p>
                <ReadMoreButton />
            </div>
        </div>
    )
}
