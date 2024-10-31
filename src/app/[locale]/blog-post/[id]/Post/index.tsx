'use client'

import Image from 'next/image'
import { useTranslations } from 'use-intl'

import { className } from './config'
import { PostInfo } from './PostInfo'
import styles from './styles.module.scss'
import { PostProps } from './types'

import AuthorCard from '@components/AuthorCard'
import CategoryCard from '@components/CategoryCard'
import { categoriesData } from '@constants'

export const Post = ({ post }: PostProps) => {
    const {
        id: postId,
        author,
        postInfo,
        postTime,
        image,
        category: postCategory,
    } = post
    const tPosts = useTranslations('Posts')

    const { id: categoryId, Icon } = categoriesData.find(
        (category) => category.category === postCategory
    )!

    const title = tPosts(`${Number(postId) - 1}.title`)

    return (
        <div className={styles.container}>
            <div className={styles.head}>
                <AuthorCard
                    horizontalCard={true}
                    author={author}
                    subtitle={postTime}
                    className={className}
                />
                <div className={styles.title}>{title}</div>
                <CategoryCard
                    id={categoryId}
                    className={className}
                    Icon={Icon}
                    withSubtitle={false}
                />
            </div>
            {image && (
                <Image
                    src={image.imageUrl}
                    alt={image.altText}
                    width={1280}
                    height={580}
                    className={styles.image}
                />
            )}
            <div className={styles.postInfo}>
                {postInfo.map((postInfo, index) => (
                    <PostInfo
                        key={postId}
                        postInfoData={postInfo}
                        id={postId}
                        index={index}
                    />
                ))}
            </div>
        </div>
    )
}
