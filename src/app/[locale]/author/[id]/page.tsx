'use client'

import { useMemo } from 'react'
import { useParams } from 'next/navigation'
import { useTranslations } from 'use-intl'

import { className } from './config'
import { HeroBlock } from './HeroBlock'
import styles from './page.module.scss'

import PostCard from '@components/PostCard'
import { allPosts, authorsData } from '@constants'

export default function Home() {
    const { id } = useParams()
    const authorId = id as string

    const t = useTranslations('Author')

    const authorData = useMemo(
        () => authorsData.find((author) => author.id === authorId)!,
        [authorId]
    )
    const authorPosts = useMemo(
        () => allPosts.filter((post) => post.author.id === authorId),
        [authorId]
    )

    return (
        <div className={styles.page}>
            <HeroBlock authorData={authorData} />
            <div className={styles.content}>
                <div className={styles.posts} data-testid="author-posts">
                    <h2 className={styles.title}>{t('postTitle')}</h2>
                    {authorPosts.map(({ id, image }) => (
                        <PostCard
                            id={id}
                            image={image}
                            key={id}
                            className={className}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
