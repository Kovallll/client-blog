import { PostData } from '@types'

export interface PostCardProps
    extends Omit<PostData, 'author' | 'category' | 'postTime' | 'postInfo'> {
    className?: string
    verticalCard?: boolean
    onClick?: (id: string) => void
}
