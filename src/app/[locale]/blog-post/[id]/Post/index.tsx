import Image from 'next/image'

import { className } from './config'
import { PostInfo } from './PostInfo'
import styles from './styles.module.scss'
import { PostProps } from './types'

import AuthorCard from '@components/AuthorCard'
import CategoryCard from '@components/CategoryCard'

export const Post = ({ post }: PostProps) => {
    const { author, postInfo, postTime, title, image, category } = post

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
                <CategoryCard category={category} className={className} />
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
                {postInfo.map((postInfoData) => (
                    <PostInfo postInfoData={postInfoData} />
                ))}
            </div>
        </div>
    )
}
