import { useMemo } from 'react'

import { className, excerptColor, postsOnPage, title } from './config'
import styles from './styles.module.scss'
import { ReadNextProps } from './types'

import PostCard from '@components/PostCard'
import { allPosts } from '@constants'

export const ReadNext = ({ post: currentPost }: ReadNextProps) => {
    const categoryPosts = useMemo(() => {
        return allPosts
            .map((post) => {
                if (
                    post.category === currentPost.category &&
                    post.id !== currentPost.id
                ) {
                    return post
                }
            })
            .filter((post) => post !== undefined)
    }, [currentPost.category, currentPost.id])

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.posts}>
                {categoryPosts
                    .slice(0, postsOnPage)
                    .map(({ category, id, title, image, subtitle }) => (
                        <PostCard
                            key={id}
                            excerpt={{
                                highlightText: category,
                                color: excerptColor,
                            }}
                            id={id}
                            title={title}
                            image={image}
                            subtitle={subtitle}
                            verticalCard={true}
                            className={className}
                        />
                    ))}
            </div>
        </div>
    )
}
