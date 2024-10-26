'use client'

import { useMemo } from 'react'
import { useParams } from 'next/navigation'

import styles from './page.module.scss'
import { Post } from './Post'
import { ReadNext } from './ReadNext'

import JoinUs from '@components/JoinUs'
import { allPosts } from '@constants'

export default function BlogPost() {
    const { id } = useParams()

    const post = useMemo(() => allPosts.find((post) => post.id === id)!, [id])

    return (
        <div className={styles.page}>
            <div className={styles.content}>
                <Post post={post} />
                <ReadNext post={post} />
                <JoinUs />
            </div>
        </div>
    )
}
