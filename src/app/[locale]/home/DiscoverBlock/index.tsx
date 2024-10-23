import Image from 'next/image'

import { DiscoverButton } from './DiscoverButton'
import styles from './styles.module.scss'

import { Article } from '@components/Article'

export const DiscoverBlock = () => {
    return (
        <section className={styles.container}>
            <Image
                src="/images/discover.png"
                alt="discover image"
                width={900}
                height={700}
                className={styles.image}
            />
            <div className={styles.info}>
                <Article
                    caption="Why we started "
                    title="It started out as a simple idea and evolved into our passion"
                    subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip."
                    className="discover"
                />
                <DiscoverButton />
            </div>
        </section>
    )
}
