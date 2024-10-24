'use client'
import { useState } from 'react'
import classNames from 'classnames'

import styles from './styles.module.scss'

import { PostCard } from '@components/PostCard'
import { blogPostsData } from '@constants'

const getPosts = (start: number, end: number) => {
    console.log(start, end)
    return blogPostsData.slice(start, end)
}

const postsOnPage = 4
const allPosts = 12

export const AllPostsBlock = () => {
    const [posts, setPosts] = useState(blogPostsData.slice(0, postsOnPage))
    const [postsPage, setPostsPage] = useState(1)

    const isNextDisabled = postsPage * postsOnPage === allPosts
    const isPrevDisabled = postsPage === 1

    const handleClickNextButton = () => {
        setPostsPage((prev) => (prev += 1))
        const countPosts = postsPage * postsOnPage
        const newPosts = getPosts(countPosts, countPosts + postsOnPage)
        setPosts(newPosts)
    }

    const handleClickPrevButton = () => {
        setPostsPage((prev) => (prev -= 1))
        const countPosts = (postsPage - 1) * postsOnPage
        const newPosts = getPosts(countPosts - postsOnPage, countPosts)
        setPosts(newPosts)
    }

    const prevStyles = classNames(styles.prev, {
        [styles.disabledButton]: isPrevDisabled,
    })

    const nextStyles = classNames(styles.prev, {
        [styles.disabledButton]: isNextDisabled,
    })

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>All Posts</h2>
            {posts.map(({ id, image, excerpt, subtitle, title }) => (
                <PostCard
                    id={id}
                    image={image}
                    excerpt={excerpt}
                    subtitle={subtitle}
                    title={title}
                    className="blog"
                />
            ))}
            <section className={styles.pagination}>
                <button
                    className={prevStyles}
                    onClick={handleClickPrevButton}
                    disabled={isPrevDisabled}
                >
                    &lt; Prev
                </button>
                <button
                    className={nextStyles}
                    onClick={handleClickNextButton}
                    disabled={isNextDisabled}
                >
                    Next &gt;
                </button>
            </section>
        </div>
    )
}
