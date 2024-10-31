import { ImageType } from '@types'

export interface PostCardProps {
    id: string
    image?: ImageType
    className?: string
    verticalCard?: boolean
    onClick?: (id: string) => void
    withSubtitle?: boolean
}
