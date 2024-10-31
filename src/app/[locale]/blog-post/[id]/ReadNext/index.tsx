import { ReactNode, useMemo } from 'react'
import { useTranslations } from 'use-intl'

import { className, postsOnPage } from './config'
import styles from './styles.module.scss'
import { ReadNextProps } from './types'

import { Colors } from '@components/Excerpt/types'
import PostCard from '@components/PostCard'
import { allPosts } from '@constants'

export const ReadNext = ({ post: currentPost }: ReadNextProps) => {
    const tPosts = useTranslations('Posts')
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
            <div className={styles.posts} data-testid='next-posts'>
                {categoryPosts.slice(0, postsOnPage).map(({ id, image }) => {
                    const excerpt = (
                        colors: Record<Colors, (chunks: ReactNode) => ReactNode>
                    ) => tPosts.rich(`${Number(id) - 1}.excerptChunk`, colors)
                    const title = tPosts(`${Number(id) - 1}.title`)
                    const subtitle = tPosts(`${Number(id) - 1}.subtitle`)

                    return (
                        <PostCard
                            key={id}
                            excerpt={excerpt}
                            id={id}
                            title={title}
                            image={image}
                            subtitle={subtitle}
                            verticalCard={true}
                            className={className}
                        />
                    )
                })}
            </div>
        </div>
    )
}
