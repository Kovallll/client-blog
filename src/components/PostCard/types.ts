import { PostData } from '@types'

export interface PostCardProps extends PostData {
    className?: string
    verticalCard?: boolean
    onClick?: (id: string) => void
}
