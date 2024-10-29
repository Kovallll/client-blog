'use client'

import { ReactNode, useMemo } from 'react'
import { useParams } from 'next/navigation'
import { useTranslations } from 'use-intl'

import { className } from './config'
import { HeroBlock } from './HeroBlock'
import styles from './page.module.scss'

import { Colors } from '@components/Excerpt/types'
import PostCard from '@components/PostCard'
import { allPosts, authorsData } from '@constants'

export default function Home() {
    const { id } = useParams()
    const authorId = id as string

    const tPosts = useTranslations('Posts')
    const t = useTranslations('Author')

    const authorData = useMemo(
        () => authorsData.find((author) => author.id === authorId)!,
        [authorId]
    )
    const authorPosts = useMemo(
        () => allPosts.filter((post) => post.author.id === authorId),
        [authorId]
    )

    const exceprt = (
        colors: Record<Colors, (chunks: ReactNode) => ReactNode>
    ) => tPosts.rich(`${Number(id) - 1}.excerptChunk`, colors)
    const title = tPosts(`${Number(id) - 1}.title`)
    const subtitle = tPosts(`${Number(id) - 1}.subtitle`)

    return (
        <div className={styles.page}>
            <HeroBlock authorData={authorData} />
            <div className={styles.content}>
                <div className={styles.posts}>
                    <h2 className={styles.title}>{t('postTitle')}</h2>
                    {authorPosts.map(({ id, image }) => (
                        <PostCard
                            excerpt={exceprt}
                            id={id}
                            title={title}
                            image={image}
                            subtitle={subtitle}
                            key={id}
                            className={className}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}
