'use client'

import { useMemo } from 'react'
import { useParams } from 'next/navigation'

import { className, title } from './config'
import { HeroBlock } from './HeroBlock'
import styles from './page.module.scss'

import PostCard from '@components/PostCard'
import { getAuthorData, getAuthorPosts } from '@utils'

export default function Home() {
    const { id } = useParams()
    const authorId = id as string

    const authorData = useMemo(() => getAuthorData(authorId), [authorId])
    const authorPosts = useMemo(() => getAuthorPosts(authorId), [authorId])

    return (
        <div className={styles.page}>
            <HeroBlock authorData={authorData} />
            <div className={styles.content}>
                <div className={styles.posts}>
                    <h2 className={styles.title}>{title}</h2>
                    {authorPosts.map(
                        ({ excerpt, id, title, image, subtitle }) => (
                            <PostCard
                                excerpt={excerpt}
                                id={id}
                                title={title}
                                image={image}
                                subtitle={subtitle}
                                key={id}
                                className={className}
                            />
                        )
                    )}
                </div>
            </div>
        </div>
    )
}
