'use client'

import { useState } from 'react'
import { useTranslations } from 'next-intl'

import { useRouter } from 'src/i18n/routing'
import { className } from './config'
import styles from './styles.module.scss'

import Button from '@components/Button'
import PostCard from '@components/PostCard'
import { homePostsData, Paths } from '@constants'
import { PostData } from '@types'

export const FeaturedPost = () => {
    const [featuredPostData, setFeaturedPostData] = useState<PostData>(
        homePostsData[0]
    )
    const { id, image } = featuredPostData

    const router = useRouter()
    const t = useTranslations('HomePage')

    const handleClickReadMore = () => {
        router.push(`${Paths.BlogPost}/${id}`)
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
                <h2 className={styles.title}>{t('featureTitle')}</h2>
                <div className={styles.featuredPostContent}>
                    <PostCard
                        id={id}
                        image={image}
                        verticalCard={true}
                        className={className}
                    />
                    <div className={styles.button}>
                        <Button
                            onClick={handleClickReadMore}
                            title={t('featureButtonTitle')}
                        />
                    </div>
                </div>
            </div>
            <div className={styles.allPosts}>
                <div className={styles.textBlock}>
                    <h2 className={styles.title}>{t('allPostsTitle')}</h2>
                    <button
                        className={styles.view}
                        onClick={handleClickViewAllButton}
                    >
                        {t('viewAll')}
                    </button>
                </div>
                <div
                    className={styles.allPostsContent}
                    data-testid="feature-allposts"
                >
                    {homePostsData.map(({ id }) => (
                        <PostCard
                            onClick={handleClikcPostCard}
                            key={id}
                            id={id}
                            withSubtitle={false}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}
