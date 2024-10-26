import { PostData } from '@types'

export interface PostCardProps
    extends Omit<
        PostData,
        'author' | 'category' | 'postTime' | 'postInfo' | 'tags'
    > {
    className?: string
    verticalCard?: boolean
    onClick?: (id: string) => void
}
