'use client'

import classNames from 'classnames'
import { useTranslations } from 'use-intl'

import {
    allPosts,
    className,
    nextText,
    postsOnPage,
    prevText,
    title,
} from './config'
import styles from './styles.module.scss'

import PostCard from '@components/PostCard'
import { blogPostsData } from '@constants'
import { usePostPagination } from '@hooks'

export const AllPostsBlock = () => {
    const { posts, postsPage, handleClickNextButton, handleClickPrevButton } =
        usePostPagination(postsOnPage, blogPostsData)

    const tPosts = useTranslations('Posts')

    const isNextDisabled = postsPage * postsOnPage === allPosts
    const isPrevDisabled = postsPage === 1

    const prevStyles = classNames(styles.prev, {
        [styles.disabledButton]: isPrevDisabled,
    })

    const nextStyles = classNames(styles.prev, {
        [styles.disabledButton]: isNextDisabled,
    })

    return (
        <div className={styles.container} data-testid='all-posts'>
            <h2 className={styles.title}>{title}</h2>
            {posts.map(({ id, image }) => (
                <PostCard
                    id={id}
                    key={id}
                    image={image}
                    excerpt={(colors) =>
                        tPosts.rich(`${Number(id) - 1}.excerptChunk`, colors)
                    }
                    subtitle={tPosts(`${Number(id) - 1}.subtitle`)}
                    title={tPosts(`${Number(id) - 1}.title`)}
                    className={className}
                />
            ))}
            <section className={styles.pagination}>
                <button
                    className={prevStyles}
                    onClick={handleClickPrevButton}
                    disabled={isPrevDisabled}
                >
                    {prevText}
                </button>
                <button
                    className={nextStyles}
                    onClick={handleClickNextButton}
                    disabled={isNextDisabled}
                >
                    {nextText}
                </button>
            </section>
        </div>
    )
}
