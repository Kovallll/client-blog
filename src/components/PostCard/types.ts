import { ReactNode } from 'react'

import { Colors } from '@components/Excerpt/types'
import { PostData } from '@types'

export interface PostCardProps
    extends Omit<
        PostData,
        | 'author'
        | 'category'
        | 'postTime'
        | 'postInfo'
        | 'tags'
        | 'excerptChunk'
    > {
    excerpt: (
        colors: Record<Colors, (chunks: ReactNode) => ReactNode>
    ) => ReactNode
    className?: string
    verticalCard?: boolean
    onClick?: (id: string) => void
}
