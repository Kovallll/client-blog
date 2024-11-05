import { useMemo } from 'react'
import { useTranslations } from 'use-intl'

import { className, postsOnPage } from './config'
import styles from './styles.module.scss'
import { ReadNextProps } from './types'

import PostCard from '@components/PostCard'
import { allPosts } from '@constants'

export const ReadNext = ({ post: currentPost }: ReadNextProps) => {
    const t = useTranslations('BlogPost')

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
            <h2 className={styles.title}>{t('nextTitle')}</h2>
            <div className={styles.posts} data-testid="next-posts">
                {categoryPosts.slice(0, postsOnPage).map(({ id, image }) => (
                    <PostCard
                        key={id}
                        id={id}
                        image={image}
                        verticalCard={true}
                        className={className}
                    />
                ))}
            </div>
        </div>
    )
}
