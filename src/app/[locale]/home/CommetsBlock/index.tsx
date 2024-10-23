import styles from './styles.module.scss'

import { Article } from '@components/Article'
import { AuthorCard } from '@components/AuthorCard'
import { icons } from '@constants'

export const CommetsBlock = () => {
    const { NextArrowIcon, PrevArrowIcon } = icons
    return (
        <div className={styles.container}>
            <div className={styles.article}>
                <Article
                    caption="TESTIMONIALS"
                    title="What people say about our blog"
                    subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."
                />
            </div>
            <span className={styles.line}></span>
            <div className={styles.comment}>
                <p className={styles.title}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                </p>
                <div className={styles.bottomComment}>
                    <AuthorCard
                        avatarUrl="/images/profile.png"
                        fullName="Jonathan Vallem"
                        subtitle="New york, USA"
                        horizontalCard={true}
                    />
                    <div className={styles.pagination}>
                        <span className={styles.prevArrow}>
                            <PrevArrowIcon />
                        </span>
                        <span className={styles.nextArrow}>
                            <NextArrowIcon />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
