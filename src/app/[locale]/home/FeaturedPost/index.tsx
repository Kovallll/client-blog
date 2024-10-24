'use client'

import { useState } from 'react'

import { useRouter } from 'src/i18n/routing'
import styles from './styles.module.scss'

import { Button } from '@components/Button'
import { PostCard } from '@components/PostCard'
import { homePostsData, Paths } from '@constants'
import { PostData } from '@types'

export const FeaturedPost = () => {
    const [featuredPostData, setFeaturedPostData] = useState<PostData>(
        homePostsData[0]
    )
    const { excerpt, id, title, image, subtitle } = featuredPostData

    const router = useRouter()

    const handleClickReadMore = () => {
        router.push(Paths.Blog)
    }

    const handleClikcPostCard = (id: string) => {
        const data = homePostsData.find((post) => post.id === id)!
        setFeaturedPostData(data)
    }

    const handleClickViewAllButton = () => {
        router.push(Paths.Blog)
    }

    return (
        <section className={styles.container}>
            <div className={styles.featuredPost}>
                <h2 className={styles.title}>Featured Post</h2>
                <div className={styles.featuredPostContent}>
                    <PostCard
                        id={id}
                        excerpt={excerpt}
                        title={title}
                        image={image}
                        subtitle={subtitle}
                        verticalCard={true}
                        className="featurePost"
                    />
                    <div className={styles.button}>
                        <Button
                            onClick={handleClickReadMore}
                            title="Read More >"
                        />
                    </div>
                </div>
            </div>
            <div className={styles.allPosts}>
                <div className={styles.textBlock}>
                    <h2 className={styles.title}>All Posts</h2>
                    <button
                        className={styles.view}
                        onClick={handleClickViewAllButton}
                    >
                        View All
                    </button>
                </div>
                <div className={styles.allPostsContent}>
                    {homePostsData.map(({ id, excerpt, title }) => (
                        <PostCard
                            onClick={handleClikcPostCard}
                            key={id}
                            id={id}
                            excerpt={excerpt}
                            title={title}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
