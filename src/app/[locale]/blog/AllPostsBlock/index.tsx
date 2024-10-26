'use client'

import { useState } from 'react'
import classNames from 'classnames'

import {
    allPosts,
    className,
    exceprtColor,
    nextText,
    postsOnPage,
    prevText,
    title,
} from './config'
import styles from './styles.module.scss'

import PostCard from '@components/PostCard'
import { blogPostsData } from '@constants'
import { PaginationDirection } from '@types'

export const AllPostsBlock = () => {
    const [posts, setPosts] = useState(blogPostsData.slice(0, postsOnPage))
    const [postsPage, setPostsPage] = useState(1)

    const isNextDisabled = postsPage * postsOnPage === allPosts
    const isPrevDisabled = postsPage === 1

    const paginationSwap = (
        direction: PaginationDirection,
        countPosts: number
    ) => {
        const pageSwap = direction === 'next' ? 1 : -1
        setPostsPage((prev) => (prev += pageSwap))

        const startSlice =
            direction === 'next' ? countPosts : countPosts - postsOnPage
        const endSlice =
            direction === 'next' ? countPosts + postsOnPage : countPosts

        const newPosts = blogPostsData.slice(startSlice, endSlice)
        setPosts(newPosts)
    }

    const handleClickNextButton = () => {
        const countPosts = postsPage * postsOnPage
        paginationSwap('next', countPosts)
    }

    const handleClickPrevButton = () => {
        const countPosts = (postsPage - 1) * postsOnPage
        paginationSwap('prev', countPosts)
    }

    const prevStyles = classNames(styles.prev, {
        [styles.disabledButton]: isPrevDisabled,
    })

    const nextStyles = classNames(styles.prev, {
        [styles.disabledButton]: isNextDisabled,
    })

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>{title}</h2>
            {posts.map(({ id, image, category, subtitle, title }) => (
                <PostCard
                    id={id}
                    image={image}
                    excerpt={{ highlightText: category, color: exceprtColor }}
                    subtitle={subtitle}
                    title={title}
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
