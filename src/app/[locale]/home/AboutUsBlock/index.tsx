import { Link } from 'src/i18n/routing'
import styles from './styles.module.scss'

import { Article } from '@components/Article'

export const AboutUsBlock = () => {
    return (
        <section className={styles.container}>
            <div className={styles.lines}>
                <span className={styles.yellowLine}></span>
                <span className={styles.purpleLine}></span>
            </div>
            <div className={styles.content}>
                <div className={styles.about}>
                    <Article
                        caption="About us"
                        title="We are a community of content writers who share their
                        learnings"
                        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua."
                    />
                    <div className={styles.link}>
                        <Link href="/">Read More &gt;</Link>
                    </div>
                </div>
                <div className={styles.mision}>
                    <Article
                        caption="Our mision"
                        title=" Creating valuable content for creatives all around the
                        world"
                        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat."
                        className="misionTitle"
                    />
                </div>
            </div>
        </section>
    )
}
